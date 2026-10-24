---
layout: project
title: "Developing a Python Package: Lyra"
summary: "Simulation-based inference of galaxy Lyman-alpha equivalent widths, conditioned on galaxy properties."
github_url: "https://github.com/astroscar09/lyra"
permalink: /projects/sbi-lyra/
---

## Overview

**Lyra** is a Python package for fast, accurate Bayesian inference of galaxy physical properties using simulation-based inference (SBI). Trained on over **11 million simulated galaxies**, Lyra enables high-fidelity posterior inference without the computational cost of traditional likelihood-based methods. The package is designed to be lightweight, reproducible, and easy to integrate into existing analysis pipelines.

## Project Goal

The primary goal of Lyra is to democratize state-of-the-art Bayesian inference for large astronomical datasets. By leveraging SBI, Lyra provides robust posterior estimates of Lyman-alpha EW at scale, making precise inference feasible even for surveys containing tens to hundreds of thousands of objects.

## Approach &amp; Methods

Lyra uses neural density estimation techniques from the `sbi` framework to learn the conditional distribution of galaxy physical parameters given observable features. The model is trained on a massive suite of galaxies spanning a wide range of astrophysical conditions, ensuring strong generalization across parameter space.

Once trained, inference reduces to a forward pass through the neural network, letting posterior sampling run orders of magnitude faster than traditional MCMC or nested sampling. The trained models ship with the package and can be accessed locally after installation.

## Key Findings

> Lyra achieves accurate and well-calibrated posterior estimates across a broad range of galaxy properties, demonstrating that simulation-based inference can match — and in many cases outperform — classical inference techniques while reducing computational cost by several orders of magnitude. Lyra hosts different models conditioned on different groups of galaxy properties, so it's flexible to anyone's dataset.

## Interpretation

These results highlight the power of simulation-based inference for modern astronomical surveys, where dataset sizes increasingly exceed the limits of traditional Bayesian workflows. By learning the inference problem directly from the galaxies, Lyra bypasses explicit likelihood construction while retaining full posterior information.

The scale of the training data (over 11 million galaxies) lets Lyra capture complex, non-linear relationships between observables and physical parameters, resulting in stable and physically meaningful posteriors even in low signal-to-noise regimes.

## Potential Applications

Lyra is well-suited for large survey analyses, including population studies and exploratory inference where fast posterior evaluation is critical. The broader goal is to support reionization-based studies, where the community can use this tool to infer the Lyman-alpha equivalent width distribution on a per-galaxy basis, tied to galaxy properties — and from there, infer IGM evolution and the neutral hydrogen content. The package is designed to integrate seamlessly with existing Python-based astronomy workflows.

## Limitations

- Inference quality is limited by the fidelity and coverage of the training simulations.
- Currently supports a fixed set of trained models and parameterizations.
- Not a replacement for detailed object-by-object modeling when bespoke likelihoods are required.

## Future Work

Future development will focus on expanding the range of supported galaxy models and adding functionality so anyone can perform their own training. Another avenue is providing the community with the training and testing data, so it can be combined with others' data for further training and inference.

## Continuing the Project

Lyra is actively developed as an open, extensible tool. Users can install it locally via `pip`, access pre-trained models, and incorporate Lyra into their own analysis pipelines. Contributions, feedback, and extensions are encouraged to help it evolve alongside the needs of the astronomical community.
