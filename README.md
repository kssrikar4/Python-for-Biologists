# Python for Biologists

[![GitHub Pages Deployment](https://img.shields.io/github/deployments/kssrikar4/Python-for-Biologists/github-pages?label=Website%20Status&logo=github&logoColor=white)](https://kssrikar4.github.io/Python-for-Biologists/)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![Python Version](https://img.shields.io/badge/Python-3.11-3776AB?logo=python&logoColor=white)](https://pyodide.org)
[![Bioinformatics](https://img.shields.io/badge/Domain-Bioinformatics-8A2BE2)](#)

An interactive, zero-installation, serverless educational web platform designed to teach foundational programming and data science to biological workflows.

> **Live Application:** [https://kssrikar4.github.io/Python-for-Biologists/](https://kssrikar4.github.io/Python-for-Biologists/)

## Overview

**Python for Biologists** is a complete scientific computing environment. By running an in-browser Python execution engine, it eliminates the traditional barrier of setting up local environments, installing complex dependencies, or configuring command-line utilities.

Students progress through a structural curriculum complete with standard inputs, live terminal logs, real-time feedback loops, and visual output dashboards.

## Curriculum Structure

The platform organizes its learning curriculum across 10 progressive computational biology modules:

| Module | Core Domain | Technical Mechanism |
| :--- | :--- | :--- |
| **1. Python Foundations** | Biological Data Storage | Variable mappings, slice index extraction, codon dictionaries, and programmatic assays. |
| **2. DNA & RNA Analysis** | Sequence Manipulation | Dynamic base profiling, reverse complement arrays, transcription models, and open reading frames (ORFs). |
| **3. Genetics & Populations** | Inheritance Systems | Monohybrid crosses, Punnett generation counters, and Hardy-Weinberg equilibrium tracking. |
| **4. Biological Data Analysis** | Expression Matrix Processing | Parsing Transcripts Per Million (TPM) datasets via Pandas, slice sorting, and summary metrics. |
| **5. Biological Visualization** | Scientific Graphic Rendering | Generating bacterial log-growth curves, read-length histograms, and GC bias distribution plots. |
| **6. Computational Ecology** | Dynamic System Modeling | Running numerical simulations on Logistic Population Growth models and Lotka-Volterra equations. |
| **7. Evolution** | Stochastic Variation | Modeling random point mutation frequencies and basic match-fitness evaluations. |
| **8. Protein Analysis** | Peptide Sequence Properties | Structural mass tracking (Da) factoring sequence condensation water loss, and Kyte-Doolittle profiles. |
| **9. Working with Real Data** | File I/O & IO Streaming | Direct interaction parsing raw `/data/*.fasta` references via automated `Bio.SeqIO` objects. |
| **10. Capstone Project** | End-to-End Pipeline Evaluation | Orchestrating multi-layered tasks: Pulling raw files, mining structural targets, and generating plots. |

## Repository Manifest

* **`index.html`**: Entry window schema outlining dashboard metrics, tracking components, and framework bundles.
* **`styles.css`**: Design stylesheet utilizing modern CSS variables for uniform theme rendering.
* **`app.js`**: Core setup manager handling Pyodide boot, package loading, dataset fetches, UI initialization, and execution runtime routing.
* **`lessons.js`**: Structural raw collection holding the code templates, prompt text instructions, and sample solutions for all cases.
* **`data_manifest.txt`**: Document listing static resource endpoints used for data ingestion validation.
  
## License

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**.


## Acknowledgments

* **NCBI Entrez Database System:** For hosting and providing public api retrieval mechanisms for basic research sequences (`BRCA1`, `TP53`, `EGFR`, `KRAS`, `PTEN`).
* **The Pyodide Project Team:** For making open-source client-side WebAssembly computation possible.
