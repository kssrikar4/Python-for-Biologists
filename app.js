let pyodide;
const terminals = {};
let currentCaseId = null;

let userProgress = JSON.parse(localStorage.getItem('bio-pyodine-progress')) || {
    xp: 0,
    completed: {},
    streak: 1
};

function updateXP(points, caseId) {
    if (!userProgress.completed[caseId]) {
        userProgress.completed[caseId] = true;
        userProgress.xp += points;
        localStorage.setItem('bio-pyodine-progress', JSON.stringify(userProgress));
        renderDashboard();
    }
}

function renderDashboard() {
    const xpCounter = document.getElementById('xp-counter');
    const xpBar = document.getElementById('xp-bar');
    if(xpCounter) xpCounter.innerText = userProgress.xp;
    if(xpBar) {
        let levelXP = userProgress.xp % 500;
        let percent = (levelXP / 500) * 100;
        xpBar.style.width = percent + '%';
    }
}

window.display_plot = function(b64) {
    const termBlock = document.getElementById('term-' + currentCaseId).closest('.interactive-block');
    let plotDiv = document.getElementById('plot-area-' + currentCaseId);
    if (!plotDiv) {
        plotDiv = document.createElement('div');
        plotDiv.id = 'plot-area-' + currentCaseId;
        plotDiv.style.background = '#FFFFFF';
        plotDiv.style.padding = '10px';
        plotDiv.style.borderTop = '1px solid var(--border)';
        plotDiv.style.textAlign = 'center';
        termBlock.appendChild(plotDiv);
    }
    plotDiv.innerHTML = '<img src="data:image/png;base64,' + b64 + '" style="max-width:100%; border-radius: 4px; border: 1px solid #E0E6ED;"/>';
};

function initUI() {
    const nav = document.getElementById('nav-list');
    lessons.forEach((l, idx) => {
        const item = document.createElement('div');
        item.className = 'nav-item' + (idx === 0 ? ' active' : '');
        item.innerText = l.title;
        item.onclick = () => selectLesson(idx);
        nav.appendChild(item);
    });
    renderDashboard();
    selectLesson(0);
}

function selectLesson(idx) {
    const lesson = lessons[idx];
    document.querySelectorAll('.nav-item').forEach((item, i) => item.classList.toggle('active', i === idx));
    document.getElementById('lesson-header-container').innerHTML = '<div class="info-pill">Module</div><h1>' + lesson.title + '</h1><p>' + lesson.desc + '</p>';
    const list = document.getElementById('cases-list');
    list.innerHTML = '';
    Object.values(terminals).forEach(t => t.dispose());
    Object.keys(terminals).forEach(k => delete terminals[k]);

    lesson.cases.forEach(c => {
        let answerBtn = c.answer ? '<button class="btn" style="background: #F59E0B; color: white; margin-left: auto;" onclick="revealAnswer(' + idx + ', \'' + c.id + '\')">Reveal Answer</button>' : '';
        const caseHtml = '<div class="case-card"><div class="explanation-block"><div class="info-pill">' + c.label + '</div><h3>' + c.title + '</h3>' + c.explanation + '</div><div class="interactive-block"><div class="block-header"><span class="block-label">Python Editor</span></div><textarea id="editor-' + c.id + '" class="code-editor" spellcheck="false">' + c.code + '</textarea><div class="action-bar"><button class="btn btn-primary" onclick="runCase(\'' + c.id + '\')">Run Code</button><button class="btn" onclick="resetCase(' + idx + ', \'' + c.id + '\')">Reset</button>' + answerBtn + '</div><div class="block-header" style="border-top: 1px solid var(--border); background: #1E1E1E;"><span class="block-label" style="color: #9CA3AF;">Terminal Output</span></div><div id="term-' + c.id + '" class="terminal-panel"></div></div></div>';
        list.insertAdjacentHTML('beforeend', caseHtml);
        setTimeout(() => {
            const term = new Terminal({ theme: { background: '#1E1E1E', foreground: '#E0E6ED' }, fontFamily: 'Source Code Pro, monospace', fontSize: 13, rows: 10 });
            term.open(document.getElementById('term-' + c.id));
            terminals[c.id] = term;
        }, 0);
    });
    document.getElementById('main').scrollTop = 0;
}

async function runCase(caseId) {
    currentCaseId = caseId;
    const plotDiv = document.getElementById('plot-area-' + caseId);
    if (plotDiv) plotDiv.innerHTML = '';
    const code = document.getElementById('editor-' + caseId).value;
    const term = terminals[caseId];
    const block = document.getElementById('term-' + caseId).closest('.interactive-block');
    term.clear();
    term.writeln('\x1b[1;34m>>> Executing...\x1b[0m');
    block.style.borderColor = 'var(--secondary)';
    pyodide.setStdout({ batched: (s) => term.writeln(s) });
    pyodide.setStderr({ batched: (s) => { term.writeln('\x1b[31m' + s + '\x1b[0m'); block.style.borderColor = 'var(--primary)'; } });
    try {
        await pyodide.runPythonAsync(code);
        if (!code.includes('Error')) {
            block.style.borderColor = '#10B981';
            updateXP(50, caseId);
            setTimeout(() => block.style.borderColor = 'var(--border)', 2000);
        }
    } catch (err) {
        term.writeln('\x1b[31mError: ' + err.message + '\x1b[0m');
        block.style.borderColor = 'var(--primary)';
    }
}

function resetCase(lIdx, cId) {
    const c = lessons[lIdx].cases.find(x => x.id === cId);
    if (c) { document.getElementById('editor-' + cId).value = c.code; terminals[cId].clear(); }
}

window.revealAnswer = function(lIdx, cId) {
    const c = lessons[lIdx].cases.find(x => x.id === cId);
    if (c && c.answer) { 
        document.getElementById('editor-' + cId).value = c.answer; 
        terminals[cId].clear();
        terminals[cId].writeln('\x1b[33m>>> Answer revealed. Try running it!\x1b[0m');
    }
}

async function bootstrap() {
    const detail = document.getElementById('load-detail');
    const statusDot = document.getElementById('status-dot');
    const statusText = document.getElementById('status-text');
    try {
        pyodide = await loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.26.1/full/" });
        try { pyodide.FS.mkdir('/data'); } catch(e) {}
        await pyodide.loadPackage("micropip");
        detail.innerText = "Installing packages and fetching data concurrently...";
        
        const fetchPromise = fetchDatasets();
        const installPromise = pyodide.runPythonAsync("import micropip\nawait micropip.install(['biopython', 'numpy', 'pandas', 'matplotlib'])");

        await Promise.all([fetchPromise, installPromise]);
        
        detail.innerText = "Configuring plot engine...";
        await pyodide.runPythonAsync(`
import matplotlib.pyplot as plt
import base64
from io import BytesIO
import js

def custom_show():
    fig = plt.gcf()
    buf = BytesIO()
    fig.savefig(buf, format='png', bbox_inches='tight')
    buf.seek(0)
    img_str = base64.b64encode(buf.read()).decode('utf-8')
    js.display_plot(img_str)
    plt.clf()

plt.show = custom_show
`);
        document.getElementById('loader').style.display = 'none';
        statusDot.style.color = '#10B981';
        statusText.innerText = 'Online (Py 3.11)';
        initUI();
    } catch (err) {
        document.getElementById('load-msg').innerHTML = '<span style="color:red">Failed</span>';
        detail.innerText = err.message;
    }
}

async function fetchDatasets() {
    const ids = "NM_007294,NM_000546,NM_005228,NM_004985,NM_000314";
    const names = ["BRCA1", "TP53", "EGFR", "KRAS", "PTEN"];
    const url = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=nuccore&id=" + ids + "&rettype=fasta&retmode=text";
    try {
        const res = await fetch(url);
        const text = await res.text();
        const chunks = text.split(">").filter(Boolean);
        for(let i = 0; i < names.length; i++) {
            if(chunks[i]) pyodide.FS.writeFile("/data/" + names[i] + ".fasta", ">" + chunks[i]);
        }
    } catch (e) {
        for(let name of names) {
            pyodide.FS.writeFile("/data/" + name + ".fasta", ">mock_" + name + "\\nATGCGTACGTTAGC\\nATGC");
        }
    }
}
window.onload = bootstrap;
