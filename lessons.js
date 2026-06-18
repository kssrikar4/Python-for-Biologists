const lessons = [
    {
        "title": "1. Python Foundations",
        "desc": "Core programming concepts applied directly to biological contexts.",
        "cases": [
            {
                "id": "m1-1",
                "label": "VARIABLES",
                "title": "Biological Data Storage",
                "explanation": "<p>Welcome to Python for Biology. Here, we don't just write code; we solve biological problems.</p>\n<p>In programming, a <b>variable</b> is a container for storing data. In biology, data can be a DNA sequence, the length of a protein, or the concentration of an enzyme.</p>\n<p>Let's store a target gene sequence and its sequence length in variables.</p>",
                "code": "gene_name = 'BRCA1'\nsequence = 'ATGCGTAC'\nseq_length = len(sequence)\n\nprint(f'Gene: {gene_name}')\nprint(f'Sequence: {sequence}')\nprint(f'Length: {seq_length} base pairs')"
            },
            {
                "id": "m1-2",
                "label": "STRINGS",
                "title": "Slicing DNA Strings",
                "explanation": "<p>DNA and RNA sequences are represented as <b>Strings</b> (text). Python allows you to extract specific parts of a string using <i>slicing</i>.</p>\n<p>For example, <code>seq[0:3]</code> extracts the first 3 letters (the first codon).</p>",
                "code": "dna = 'ATGCGTAACTGA'\nfirst_codon = dna[0:3]\nlast_codon = dna[-3:]\n\nprint(f'Full DNA: {dna}')\nprint(f'Start Codon: {first_codon}')\nprint(f'Stop Codon: {last_codon}')"
            },
            {
                "id": "m1-3",
                "label": "LISTS",
                "title": "Gene Collections",
                "explanation": "<p>When analyzing multiple samples, you need a <b>List</b>. Lists hold ordered collections of items.</p>\n<p>Let's create a list of patient sample IDs and add a new one.</p>",
                "code": "patients = ['PT-001', 'PT-002', 'PT-003']\nprint(f'Initial cohort: {patients}')\n\npatients.append('PT-004')\nprint(f'Updated cohort: {patients}')\nprint(f'Total patients: {len(patients)}')"
            },
            {
                "id": "m1-4",
                "label": "DICTIONARIES",
                "title": "The Codon Table",
                "explanation": "<p>A <b>Dictionary</b> stores key-value pairs. Nature uses dictionaries too! The genetic code maps 3-letter RNA codons (keys) to amino acids (values).</p>",
                "code": "codon_table = {\n    'AUG': 'Methionine',\n    'UUU': 'Phenylalanine',\n    'UGC': 'Cysteine',\n    'UAA': 'STOP'\n}\n\nprint(f\"AUG codes for: {codon_table['AUG']}\")\nprint(f\"UGC codes for: {codon_table['UGC']}\")"
            },
            {
                "id": "m1-5",
                "label": "LOOPS",
                "title": "Iterating Over Sequences",
                "explanation": "<p>To analyze a sequence base-by-base, we use a <b>Loop</b>. A <code>for</code> loop iterates through each character in a string or each item in a list.</p>",
                "code": "rna = 'AUGC'\nprint('Scanning RNA sequence:')\nfor base in rna:\n    print(f'Current base: {base}')"
            },
            {
                "id": "m1-6",
                "label": "FUNCTIONS",
                "title": "Reusable Assays",
                "explanation": "<p>A <b>Function</b> is a reusable block of code. Think of it as an automated laboratory protocol. You write the procedure once and run it on many samples.</p>",
                "code": "def calculate_gc(sequence):\n    g_count = sequence.count('G')\n    c_count = sequence.count('C')\n    total = len(sequence)\n    return ((g_count + c_count) / total) * 100\n\nseq1 = 'ATGCGCGC'\nseq2 = 'ATATATAT'\nprint(f'Seq 1 GC Content: {calculate_gc(seq1)}%')\nprint(f'Seq 2 GC Content: {calculate_gc(seq2)}%')"
            },
            {
                "id": "m1-sandbox",
                "label": "PRACTICE",
                "title": "Module 1 Sandbox",
                "explanation": "<p><b>Exercise:</b> Create a variable `rna_seq` with the value 'AUGC' and write a loop to print each base.</p>",
                "code": "# Write your code here\n",
                "answer": "rna_seq = 'AUGC'\nfor base in rna_seq:\n    print(base)"
            }
        ]
    },
    {
        "title": "2. DNA & RNA Analysis",
        "desc": "Computational techniques for sequence manipulation, transcription, and translation.",
        "cases": [
            {
                "id": "m2-1",
                "label": "NUCLEOTIDES",
                "title": "Base Counting",
                "explanation": "<p>Let's write a function to count the frequency of each nucleotide in a DNA strand. This is the first step in sequence profiling.</p>",
                "code": "def profile_dna(dna):\n    counts = {'A': 0, 'T': 0, 'G': 0, 'C': 0}\n    for base in dna:\n        if base in counts:\n            counts[base] += 1\n    return counts\n\nsample = 'ATGCGGACCTAT'\nprint('Nucleotide Profile:')\nprint(profile_dna(sample))"
            },
            {
                "id": "m2-2",
                "label": "COMPLEMENT",
                "title": "Reverse Complement",
                "explanation": "<p>DNA is double-stranded. If you have the sequence of the coding strand, you can find the template strand by taking the reverse complement.</p>\n<p>First we complement A->T and G->C, then we reverse the string.</p>",
                "code": "def reverse_complement(dna):\n    complement_map = {'A': 'T', 'T': 'A', 'G': 'C', 'C': 'G'}\n    complement = ''.join([complement_map[base] for base in dna])\n    return complement[::-1] # [::-1] reverses the string\n\nseq = 'ATGC'\nprint(f\"5' to 3': {seq}\")\nprint(f\"3' to 5' (Rev Comp): {reverse_complement(seq)}\")"
            },
            {
                "id": "m2-3",
                "label": "TRANSCRIPTION",
                "title": "DNA to RNA",
                "explanation": "<p>Transcription converts DNA into mRNA. Computationally, this is simple: we replace all occurrences of Thymine ('T') with Uracil ('U').</p>",
                "code": "def transcribe(dna):\n    return dna.replace('T', 'U')\n\ngene = 'ATGCGTAACTGA'\nmrna = transcribe(gene)\nprint(f'DNA:  {gene}')\nprint(f'mRNA: {mrna}')"
            },
            {
                "id": "m2-4",
                "label": "TRANSLATION",
                "title": "mRNA to Protein",
                "explanation": "<p>Translation reads mRNA in chunks of 3 (codons) and converts them into amino acids using the standard genetic code.</p>",
                "code": "codon_table = {\n    'AUG':'M', 'UUU':'F', 'UUC':'F', 'UUA':'L', 'UUG':'L',\n    'UCU':'S', 'UCC':'S', 'UCA':'S', 'UCG':'S', 'UAA':'*', \n    'UAG':'*', 'UGA':'*', 'GGC':'G', 'GGA':'G', 'GGG':'G',\n    'CGC':'R', 'CGA':'R', 'CGG':'R', 'ACA':'T', 'ACC':'T',\n    # Simplified for the exercise\n}\n\ndef translate(mrna):\n    protein = ''\n    for i in range(0, len(mrna)-2, 3):\n        codon = mrna[i:i+3]\n        aa = codon_table.get(codon, '?')\n        if aa == '*': break # Stop codon\n        protein += aa\n    return protein\n\nseq = 'AUGUUCUCUCGCCGAUAA'\nprint(f'Protein: {translate(seq)}')\n"
            },
            {
                "id": "m2-5",
                "label": "ORF",
                "title": "Open Reading Frames",
                "explanation": "<p>Finding genes involves scanning for an Open Reading Frame (ORF). An ORF starts with an 'ATG' and ends with a stop codon ('TAA', 'TAG', 'TGA').</p>",
                "code": "def find_orf(dna):\n    start_idx = dna.find('ATG')\n    if start_idx == -1: return \"No start codon found\"\n    \n    for i in range(start_idx, len(dna)-2, 3):\n        codon = dna[i:i+3]\n        if codon in ['TAA', 'TAG', 'TGA']:\n            return dna[start_idx:i+3]\n    return \"No stop codon found\"\n\nchr_segment = 'GGCTATGCCCAGCTAACT'\nprint(f'Extracted ORF: {find_orf(chr_segment)}')\n"
            },
            {
                "id": "m2-sandbox",
                "label": "PRACTICE",
                "title": "Module 2 Sandbox",
                "explanation": "<p><b>Exercise:</b> Write a function `get_gc` that takes a DNA string and returns the GC percentage.</p>",
                "code": "# Write your code here\n",
                "answer": "def get_gc(dna):\n    g = dna.count('G')\n    c = dna.count('C')\n    return (g + c) / len(dna) * 100\nprint(get_gc('ATGCGC'))"
            }
        ]
    },
    {
        "title": "3. Genetics & Populations",
        "desc": "Simulate inheritance patterns, Punnett squares, and population genetics.",
        "cases": [
            {
                "id": "m3-1",
                "label": "MENDEL",
                "title": "Mendelian Inheritance",
                "explanation": "<p>We can simulate the inheritance of alleles from parents to offspring. Let's create a Punnett square generator for a single gene (monohybrid cross).</p>",
                "code": "parent1 = ['A', 'a'] # Heterozygous\nparent2 = ['A', 'a'] # Heterozygous\n\noffspring_genotypes = []\nfor p1_allele in parent1:\n    for p2_allele in parent2:\n        # Sort so 'aA' becomes 'Aa'\n        genotype = ''.join(sorted([p1_allele, p2_allele]))\n        offspring_genotypes.append(genotype)\n\nprint('Punnett Square Outcomes:')\nprint(offspring_genotypes)"
            },
            {
                "id": "m3-2",
                "label": "PROBABILITY",
                "title": "Genotype Frequencies",
                "explanation": "<p>Building on the Punnett square, we can calculate the probabilities of each genotype occurring in the offspring.</p>",
                "code": "outcomes = ['AA', 'Aa', 'Aa', 'aa']\ntotal = len(outcomes)\n\nfrequencies = {}\nfor genotype in outcomes:\n    frequencies[genotype] = frequencies.get(genotype, 0) + 1\n\nprint('Genotype Probabilities:')\nfor gt, count in frequencies.items():\n    prob = (count / total) * 100\n    print(f'{gt}: {prob}%')"
            },
            {
                "id": "m3-3",
                "label": "HARDY-WEINBERG",
                "title": "Population Equilibrium",
                "explanation": "<p>The Hardy-Weinberg principle states that allele frequencies remain constant in a population without evolutionary influences. The equation is: <b>p\u00b2 + 2pq + q\u00b2 = 1</b>.</p>\n<p>If we know the frequency of the recessive phenotype (q\u00b2), we can calculate the rest.</p>",
                "code": "import math\n\n# Let's say 9% of the population expresses the recessive trait (aa)\nq_squared = 0.09\nq = math.sqrt(q_squared) # Frequency of 'a' allele\np = 1 - q                # Frequency of 'A' allele\n\np_squared = p**2         # Frequency of 'AA' genotype\ntwo_pq = 2 * p * q       # Frequency of 'Aa' genotype\n\nprint(f'Allele Freqs -> p (A): {p:.2f}, q (a): {q:.2f}')\nprint(f'Genotype Freqs -> AA: {p_squared:.2f}, Aa: {two_pq:.2f}, aa: {q_squared:.2f}')"
            },
            {
                "id": "m3-sandbox",
                "label": "PRACTICE",
                "title": "Module 3 Sandbox",
                "explanation": "<p><b>Exercise:</b> Given q_squared = 0.25, calculate p.</p>",
                "code": "import math\nq_squared = 0.25\n# Calculate p here\n",
                "answer": "import math\nq_squared = 0.25\nq = math.sqrt(q_squared)\np = 1 - q\nprint(p)"
            }
        ]
    },
    {
        "title": "4. Biological Data Analysis",
        "desc": "Using Pandas and NumPy to process assays and gene expression matrices.",
        "cases": [
            {
                "id": "m4-1",
                "label": "PANDAS",
                "title": "Loading Gene Expression Data",
                "explanation": "<p>Biologists deal with massive spreadsheets. <b>Pandas</b> is the ultimate tool for tabular data.</p>\n<p>Let's create a mock dataset of gene expression levels (in TPM - Transcripts Per Million) across different samples.</p>",
                "code": "import pandas as pd\nimport numpy as np\n\ndata = {\n    'Gene': ['BRCA1', 'TP53', 'EGFR', 'MYC', 'PTEN'],\n    'Control_TPM': [10.5, 50.2, 5.1, 100.4, 45.0],\n    'Tumor_TPM': [2.1, 15.0, 85.5, 300.2, 5.5]\n}\ndf = pd.DataFrame(data)\nprint('Gene Expression Dataset:')\nprint(df)"
            },
            {
                "id": "m4-2",
                "label": "FILTERING",
                "title": "Identifying Upregulated Genes",
                "explanation": "<p>Let's calculate the Fold Change (Tumor / Control) and filter for genes that are significantly upregulated (Fold Change > 2).</p>",
                "code": "import pandas as pd\ndata = {'Gene': ['BRCA1', 'TP53', 'EGFR', 'MYC'], 'Control': [10.5, 50.2, 5.1, 100.4], 'Tumor': [2.1, 15.0, 85.5, 300.2]}\ndf = pd.DataFrame(data)\n\n# Calculate Fold Change\ndf['Fold_Change'] = df['Tumor'] / df['Control']\n\n# Filter for upregulated genes\nupregulated = df[df['Fold_Change'] > 2]\nprint('Upregulated Genes:')\nprint(upregulated[['Gene', 'Fold_Change']])"
            },
            {
                "id": "m4-3",
                "label": "STATISTICS",
                "title": "Summary Stats",
                "explanation": "<p>Pandas makes it easy to compute summary statistics across your dataset, like the mean expression of all genes in a sample.</p>",
                "code": "import pandas as pd\ndata = {'Sample': ['C1', 'C2', 'T1', 'T2'], 'EGFR_TPM': [5.1, 4.8, 85.5, 90.2]}\ndf = pd.DataFrame(data)\n\nmean_expr = df['EGFR_TPM'].mean()\nmax_expr = df['EGFR_TPM'].max()\n\nprint(f'Overall Mean EGFR Expression: {mean_expr}')\nprint(f'Max EGFR Expression: {max_expr}')\nprint('\\nFull Description:')\nprint(df.describe())"
            },
            {
                "id": "m4-sandbox",
                "label": "PRACTICE",
                "title": "Module 4 Sandbox",
                "explanation": "<p><b>Exercise:</b> Create a pandas DataFrame with 'Gene': ['A', 'B'] and 'TPM': [10, 20]. Print the mean TPM.</p>",
                "code": "import pandas as pd\n# Write your code here\n",
                "answer": "import pandas as pd\ndf = pd.DataFrame({'Gene': ['A', 'B'], 'TPM': [10, 20]})\nprint(df['TPM'].mean())"
            }
        ]
    },
    {
        "title": "5. Biological Visualization",
        "desc": "Plotting growth curves, histograms, and scatter plots with Matplotlib.",
        "cases": [
            {
                "id": "m5-1",
                "label": "MATPLOTLIB",
                "title": "Growth Curves",
                "explanation": "<p>Visualizing data is crucial. Let's plot a standard bacterial growth curve using <b>Matplotlib</b>.</p>\n<p><i>Note: We have configured the environment so that <code>plt.show()</code> automatically renders the plot in your browser!</i></p>",
                "code": "import matplotlib.pyplot as plt\n\ntime_hours = [0, 1, 2, 3, 4, 5, 6, 7]\nod600 = [0.05, 0.08, 0.15, 0.40, 0.80, 1.2, 1.4, 1.45]\n\nplt.figure(figsize=(6, 4))\nplt.plot(time_hours, od600, marker='o', color='green', linestyle='-')\nplt.title('E. coli Growth Curve (OD600)')\nplt.xlabel('Time (Hours)')\nplt.ylabel('Optical Density (600nm)')\nplt.grid(True)\nplt.show()"
            },
            {
                "id": "m5-2",
                "label": "HISTOGRAMS",
                "title": "Sequence Length Distribution",
                "explanation": "<p>Histograms show the distribution of a dataset. Let's visualize the distribution of read lengths from a mock sequencing run.</p>",
                "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\n# Generate mock sequencing read lengths (mean=150bp, std=15bp)\nread_lengths = np.random.normal(loc=150, scale=15, size=1000)\n\nplt.figure(figsize=(6, 4))\nplt.hist(read_lengths, bins=30, color='royalblue', edgecolor='black')\nplt.title('Sequencing Read Length Distribution')\nplt.xlabel('Read Length (bp)')\nplt.ylabel('Frequency')\nplt.show()"
            },
            {
                "id": "m5-3",
                "label": "SCATTER",
                "title": "GC Content vs Length",
                "explanation": "<p>Scatter plots show relationships between two variables. Let's see if there's a correlation between gene length and GC content in our mock genomes.</p>",
                "code": "import matplotlib.pyplot as plt\nimport numpy as np\n\nlengths = np.random.uniform(500, 5000, 100)\ngc_contents = np.random.uniform(30, 70, 100)\n\nplt.figure(figsize=(6, 4))\nplt.scatter(lengths, gc_contents, alpha=0.6, color='purple')\nplt.title('Gene Length vs GC Content')\nplt.xlabel('Gene Length (bp)')\nplt.ylabel('GC Content (%)')\nplt.show()"
            },
            {
                "id": "m5-sandbox",
                "label": "PRACTICE",
                "title": "Module 5 Sandbox",
                "explanation": "<p><b>Exercise:</b> Plot a line chart of [1, 2, 3] vs [10, 20, 15] and show it.</p>",
                "code": "import matplotlib.pyplot as plt\n# Write your code here\n",
                "answer": "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [10, 20, 15])\nplt.show()"
            }
        ]
    },
    {
        "title": "6. Computational Ecology",
        "desc": "Simulate population dynamics, carrying capacities, and predator-prey models.",
        "cases": [
            {
                "id": "m6-1",
                "label": "LOGISTIC",
                "title": "Logistic Growth Model",
                "explanation": "<p>Populations can't grow forever; they hit a carrying capacity (K). The logistic growth equation models this.</p>\n<p>dN/dt = r * N * (1 - N/K)</p>",
                "code": "import matplotlib.pyplot as plt\n\nN = 10     # Initial population\nr = 0.2    # Growth rate\nK = 1000   # Carrying capacity\n\npopulation_history = []\n\nfor t in range(50):\n    population_history.append(N)\n    # Calculate change in population\n    dN = r * N * (1 - N/K)\n    N += dN\n\nplt.figure(figsize=(6, 4))\nplt.plot(population_history, color='darkorange', linewidth=2)\nplt.title('Logistic Population Growth')\nplt.xlabel('Time Steps')\nplt.ylabel('Population Size (N)')\nplt.show()"
            },
            {
                "id": "m6-2",
                "label": "PREDATOR-PREY",
                "title": "Lotka-Volterra",
                "explanation": "<p>The Lotka-Volterra equations describe the dynamics of biological systems in which two species interact, one as a predator and the other as prey.</p>",
                "code": "import matplotlib.pyplot as plt\n\nprey = 40.0\npredators = 9.0\n\nalpha = 0.1   # Prey growth rate\nbeta = 0.02   # Predation rate\ndelta = 0.01  # Predator growth rate per prey eaten\ngamma = 0.1   # Predator death rate\n\nprey_hist, pred_hist = [], []\n\nfor _ in range(200):\n    prey_hist.append(prey)\n    pred_hist.append(predators)\n    \n    d_prey = (alpha * prey) - (beta * prey * predators)\n    d_pred = (delta * prey * predators) - (gamma * predators)\n    \n    prey += d_prey\n    predators += d_pred\n\nplt.figure(figsize=(6, 4))\nplt.plot(prey_hist, label='Prey', color='blue')\nplt.plot(pred_hist, label='Predator', color='red')\nplt.title('Predator-Prey Dynamics')\nplt.legend()\nplt.show()"
            },
            {
                "id": "m6-sandbox",
                "label": "PRACTICE",
                "title": "Module 6 Sandbox",
                "explanation": "<p><b>Exercise:</b> Run a simple 10-step loop simulating population doubling (starting at 1).</p>",
                "code": "N = 1\n# Write your loop here\n",
                "answer": "N = 1\nfor i in range(10):\n    N = N * 2\n    print(N)"
            }
        ]
    },
    {
        "title": "7. Evolution",
        "desc": "Model random mutations, fitness landscapes, and selection pressure.",
        "cases": [
            {
                "id": "m7-1",
                "label": "MUTATION",
                "title": "Random Mutations",
                "explanation": "<p>Evolution is driven by random mutations. Let's write a function that introduces a random point mutation into a DNA sequence.</p>",
                "code": "import random\n\ndef mutate(sequence, mutation_rate=0.05):\n    bases = ['A', 'T', 'G', 'C']\n    mutated_seq = list(sequence)\n    \n    for i in range(len(mutated_seq)):\n        if random.random() < mutation_rate:\n            current_base = mutated_seq[i]\n            possible_mutations = [b for b in bases if b != current_base]\n            mutated_seq[i] = random.choice(possible_mutations)\n            \n    return ''.join(mutated_seq)\n\noriginal = 'ATGCGTACGTTAGC'\nprint(f'Original: {original}')\nprint(f'Mutated:  {mutate(original, mutation_rate=0.2)}')\n"
            },
            {
                "id": "m7-2",
                "label": "SELECTION",
                "title": "Simulating Selection",
                "explanation": "<p>Natural selection favors traits that increase fitness. Let's simulate a population of organisms where a sequence closer to a 'target' has higher fitness.</p>",
                "code": "def calculate_fitness(seq, target):\n    matches = sum(1 for a, b in zip(seq, target) if a == b)\n    return matches / len(target)\n\ntarget_gene = 'ATGC'\npopulation = ['ATGG', 'AAGC', 'TTGC', 'ATGC']\n\nfor ind in population:\n    fitness = calculate_fitness(ind, target_gene)\n    print(f'Sequence: {ind} | Fitness: {fitness:.2f}')\n"
            },
            {
                "id": "m7-sandbox",
                "label": "PRACTICE",
                "title": "Module 7 Sandbox",
                "explanation": "<p><b>Exercise:</b> Write a function that returns True if two strings are identical, False otherwise.</p>",
                "code": "# Write your code here\n",
                "answer": "def is_identical(seq1, seq2):\n    return seq1 == seq2\nprint(is_identical('ATG', 'ATG'))"
            }
        ]
    },
    {
        "title": "8. Protein Analysis",
        "desc": "Analyze amino acid properties, molecular weights, and hydrophobicity profiles.",
        "cases": [
            {
                "id": "m8-1",
                "label": "AMINO ACIDS",
                "title": "Molecular Weight",
                "explanation": "<p>Proteins are composed of amino acids, each with a specific molecular weight. We can calculate the total weight of a protein.</p>",
                "code": "mw_table = {\n    'A': 89.1, 'R': 174.2, 'N': 132.1, 'D': 133.1, 'C': 121.2,\n    'E': 147.1, 'Q': 146.2, 'G': 75.1, 'H': 155.2, 'I': 131.2,\n    'L': 131.2, 'K': 146.2, 'M': 149.2, 'F': 165.2, 'P': 115.1,\n    'S': 105.1, 'T': 119.1, 'W': 204.2, 'Y': 181.2, 'V': 117.1\n}\n\ndef estimate_mw(protein):\n    weight = sum(mw_table.get(aa, 0) for aa in protein)\n    # Subtract water mass (18.0) for each peptide bond\n    weight -= (len(protein) - 1) * 18.015\n    return weight\n\npeptide = 'MELANIN'\nprint(f'Peptide: {peptide}')\nprint(f'Molecular Weight: {estimate_mw(peptide):.2f} Da')"
            },
            {
                "id": "m8-2",
                "label": "HYDROPHOBICITY",
                "title": "Kyte-Doolittle Plot",
                "explanation": "<p>Hydrophobic amino acids tend to be hidden inside proteins or span lipid bilayers. Let's calculate a hydrophobicity profile using the Kyte-Doolittle scale.</p>",
                "code": "import matplotlib.pyplot as plt\n\nkd_scale = {'A':1.8,'R':-4.5,'N':-3.5,'D':-3.5,'C':2.5,'Q':-3.5,'E':-3.5,'G':-0.4,'H':-3.2,'I':4.5,'L':3.8,'K':-3.9,'M':1.9,'F':2.8,'P':-1.6,'S':-0.8,'T':-0.7,'W':-0.9,'Y':-1.3,'V':4.2}\n\nprotein = 'MVLSPADKTNVKAAWGKVGAHAGEYGAEALERMFLSFPTTKTYFPHF'\nprofile = [kd_scale.get(aa, 0) for aa in protein]\n\nplt.figure(figsize=(8, 3))\nplt.plot(profile, color='teal')\nplt.axhline(0, color='red', linestyle='--')\nplt.title('Hydrophobicity Profile (Kyte-Doolittle)')\nplt.xlabel('Amino Acid Position')\nplt.ylabel('Hydrophobicity Score')\nplt.show()"
            },
            {
                "id": "m8-sandbox",
                "label": "PRACTICE",
                "title": "Module 8 Sandbox",
                "explanation": "<p><b>Exercise:</b> Sum the molecular weights of 'A' (89.1) and 'G' (75.1) from a dictionary.</p>",
                "code": "mw = {'A': 89.1, 'G': 75.1}\n# Write your code here\n",
                "answer": "mw = {'A': 89.1, 'G': 75.1}\ntotal = mw['A'] + mw['G']\nprint(total)"
            }
        ]
    },
    {
        "title": "9. Working with Real Data",
        "desc": "Load and parse the datasets automatically fetched from NCBI on startup.",
        "cases": [
            {
                "id": "m9-1",
                "label": "DATA MANIFEST",
                "title": "Reading Real Genomics Data",
                "explanation": "<p>At startup, this platform fetched real FASTA sequences from the NCBI database and stored them in the <code>/data/</code> folder.</p>\n<p>Let's read the real BRCA1 (Breast Cancer 1) sequence that was downloaded!</p>",
                "code": "import os\n\nfile_path = '/data/BRCA1.fasta'\nif os.path.exists(file_path):\n    with open(file_path, 'r') as f:\n        header = f.readline().strip()\n        sequence = ''.join([line.strip() for line in f.readlines()])\n        \n    print(f'Loaded Header: {header[:50]}...')\n    print(f'Sequence Length: {len(sequence)} bp')\n    print(f'First 100 bases:\\n{sequence[:100]}')\nelse:\n    print('File not found. Ensure datasets were fetched.')"
            },
            {
                "id": "m9-2",
                "label": "BIOPYTHON",
                "title": "SeqIO Parsing",
                "explanation": "<p>Writing our own FASTA parser is good practice, but in the real world we use <b>BioPython</b>. We installed it for you!</p>",
                "code": "from Bio import SeqIO\n\nprint(\"Parsing with BioPython SeqIO:\")\nfor record in SeqIO.parse('/data/BRCA1.fasta', 'fasta'):\n    print(f'ID: {record.id}')\n    print(f'Description: {record.description[:50]}...')\n    print(f'Length: {len(record.seq)}')\n    # Translate the first 30 bases to protein!\n    print(f'Translated snippet: {record.seq[:30].translate()}')"
            },
            {
                "id": "m9-sandbox",
                "label": "PRACTICE",
                "title": "Module 9 Sandbox",
                "explanation": "<p><b>Exercise:</b> Read '/data/TP53.fasta' using BioPython and print its length.</p>",
                "code": "from Bio import SeqIO\n# Write your code here\n",
                "answer": "from Bio import SeqIO\nrecord = list(SeqIO.parse('/data/TP53.fasta', 'fasta'))[0]\nprint(len(record.seq))"
            }
        ]
    },
    {
        "title": "10. Capstone Project",
        "desc": "Combine I/O, sequences, dictionaries, and visualization into one master script.",
        "cases": [
            {
                "id": "m10-1",
                "label": "CAPSTONE",
                "title": "The Full Pipeline",
                "explanation": "<p><b>Your Capstone Challenge:</b></p>\n<p>1. Load the TP53 gene sequence from <code>/data/TP53.fasta</code> using BioPython.<br>\n2. Calculate its GC content.<br>\n3. Find the first occurrence of 'ATG' and extract the sequence from there to the end.<br>\n4. Translate that segment into a protein.<br>\n5. Plot the hydrophobicity profile of the resulting protein.</p>\n<p>This brings together everything you've learned. Good luck!</p>",
                "code": "from Bio import SeqIO\nfrom Bio.SeqUtils import gc_fraction\nimport matplotlib.pyplot as plt\n\n# 1. Load Data\nrecord = list(SeqIO.parse('/data/TP53.fasta', 'fasta'))[0]\ndna_seq = str(record.seq)\n\n# 2. GC Content\ngc = gc_fraction(dna_seq) * 100\nprint(f'TP53 GC Content: {gc:.2f}%')\n\n# 3. Find ATG\nstart_idx = dna_seq.find('ATG')\norf_dna = record.seq[start_idx:]\n\n# 4. Translate\nprotein = str(orf_dna.translate(to_stop=True))\nprint(f'Protein Length: {len(protein)} aa')\n\n# 5. Plot Hydrophobicity\nkd_scale = {'A':1.8,'R':-4.5,'N':-3.5,'D':-3.5,'C':2.5,'Q':-3.5,'E':-3.5,'G':-0.4,'H':-3.2,'I':4.5,'L':3.8,'K':-3.9,'M':1.9,'F':2.8,'P':-1.6,'S':-0.8,'T':-0.7,'W':-0.9,'Y':-1.3,'V':4.2}\nprofile = [kd_scale.get(aa, 0) for aa in protein]\n\nplt.figure(figsize=(10, 3))\nplt.plot(profile, color='crimson')\nplt.title('TP53 Hydrophobicity Profile')\nplt.xlabel('Residue')\nplt.ylabel('KD Score')\nplt.show()\n"
            },
            {
                "id": "m10-sandbox",
                "label": "PRACTICE",
                "title": "Module 10 Sandbox",
                "explanation": "<p><b>Exercise:</b> Load BRCA1, find its GC content, and plot a random histogram of 100 values.</p>",
                "code": "from Bio import SeqIO\nfrom Bio.SeqUtils import gc_fraction\nimport matplotlib.pyplot as plt\nimport numpy as np\n# Write your code here\n",
                "answer": "from Bio import SeqIO\nfrom Bio.SeqUtils import gc_fraction\nimport matplotlib.pyplot as plt\nimport numpy as np\n\nrecord = list(SeqIO.parse('/data/BRCA1.fasta', 'fasta'))[0]\nprint('GC:', gc_fraction(record.seq))\n\ndata = np.random.normal(0, 1, 100)\nplt.hist(data)\nplt.show()"
            }
        ]
    }
];
