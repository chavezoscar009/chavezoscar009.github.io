---
layout: project
title: "Predicting Lyman-α Emission with Machine Learning"
summary: "Leading a team of four to compare neural networks, Random Forest, Decision Trees, and XGBoost for predicting intrinsic Lyman-alpha emission."
github_url: "https://github.com/astroscar09/Model_Selection_ML"
permalink: /projects/ml-comparison/
---

## Scientific Background

The Epoch of Reionization (EoR) is the final major phase transition of the universe, during which neutral hydrogen became fully ionized. Although quasars provide evidence of this transition, constructing a complete timeline remains difficult because key emission lines are absorbed at early times.

Lyman-α emission is a sensitive tracer of neutral hydrogen and is produced abundantly in star-forming galaxies, but its observability is strongly suppressed by scattering in neutral gas — complicating its use as a probe of reionization.

## Project Goal

**Can machine learning accurately predict intrinsic Lyman-α emission from a galaxy using its physical properties?**

I led a team of four to analyze over 11,000 galaxies at lower redshift — where the universe is fully ionized — to model the intrinsic Lyman-α equivalent width and identify the galaxy properties that drive its observability.

## Data

Our dataset consists of over **11,000 galaxies** with physical properties inferred using Bayesian modeling. After quality cuts on photometric fits, signal-to-noise, and equivalent width, a clean subset was used for the machine learning analysis:

- Star formation rate (SFR)
- Dust attenuation (A<sub>V</sub>)
- Stellar mass and age
- Metallicity and ionization parameter
- Redshift

## Machine Learning Models

We evaluated several non-linear regression models to predict the rest-frame Lyman-α equivalent width:

- Neural networks (PyTorch) — my primary role on the team
- Random Forest regression
- Decision trees
- XGBoost

## Results

**XGBoost achieved the best predictive performance**, outperforming neural networks and tree-based models, with prediction errors of approximately 60–80&nbsp;Å. Neural networks performed competitively but struggled at high equivalent widths due to data sparsity; decision trees showed limited predictive power, while random forests achieved moderate success.

## Feature Importance &amp; Interpretability

Using SHAP analysis on the XGBoost model, we identified the most influential physical drivers of Lyman-α emission:

- Star formation rate (SFR)
- Dust attenuation (A<sub>V</sub>)
- Mass-weighted stellar age
- Redshift
- Stellar mass

These results provide physically interpretable insight into the processes that regulate Lyman-α escape from galaxies.

## Scientific Impact

This framework enables predictions of intrinsic Lyman-α emission that can be applied at higher redshifts to constrain the neutral hydrogen fraction during the Epoch of Reionization — bridging data-driven modeling and astrophysical insight.

## Future Work

- Expand the training set to include noisier and higher-EW galaxies
- Explore deeper neural network architectures and alternative loss functions
- Improve the underlying galaxy-property inference pipelines

## Full Project Report

The full technical report for this project, including methodology, model comparisons, and visualizations:

<iframe src="{{ '/files/SDS_Project_Description.pdf' | relative_url }}" width="100%" height="800px" title="ML model comparison — full project report"></iframe>
