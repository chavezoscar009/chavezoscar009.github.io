---
layout: project
title: "Flu Shot Learning: H1N1 and Seasonal Flu Vaccination"
summary: "An XGBoost pipeline deployed on Amazon SageMaker to predict vaccination likelihood from survey data."
github_url: "https://github.com/astroscar09/DS/tree/main/H1N1_Predictions/srcdir"
permalink: /projects/h1n1-vaccine-aws/
---

Can you predict whether people got the H1N1 and seasonal flu vaccines, using information they shared about their backgrounds, opinions, and health behaviors? See the original [DrivenData challenge and dataset](https://www.drivendata.org/competitions/66/flu-shot-learning/page/210/).

## Overview

Vaccination is a key public-health measure for fighting infectious disease — vaccines protect individuals, and enough immunization in a community reduces spread through herd immunity.

Beginning in spring 2009, a pandemic caused by the H1N1 influenza virus, colloquially known as "swine flu," swept across the world; researchers estimate it caused between 151,000 and 575,000 deaths globally in its first year. A vaccine became publicly available that October, and in late 2009/early 2010 the U.S. conducted the National 2009 H1N1 Flu Survey — a phone survey asking respondents whether they'd received the H1N1 and seasonal flu vaccines, alongside questions about their social, economic, and demographic background, opinions on illness risk and vaccine effectiveness, and transmission-mitigating behaviors. Understanding how these characteristics relate to vaccination patterns can guide future public health efforts.

## Project Goal

The primary goal was to determine whether we could accurately predict the likelihood of someone receiving the H1N1 vaccine and the seasonal flu vaccine — a multilabel problem, predicting the likelihood of each label rather than a single class.

## Approach &amp; Methods

We began with a custom XGBoost model trained directly on processed tabular features extracted from the dataset, allowing rapid experimentation and baseline performance evaluation.

To scale training and leverage cloud resources, we deployed the model using Amazon SageMaker: the dataset was uploaded to S3, and a SageMaker training job was launched using a custom training script, enabling distributed training and automated management of compute resources.

Model performance was evaluated under multiple preprocessing and cross-validation strategies, including random splits, where data points were randomly divided into training and testing sets to evaluate overall predictive performance.

## Key Findings

> The XGBoost models trained via SageMaker achieved strong predictive performance, with AUC-ROC scores of 0.82 for H1N1 and 0.84 for seasonal flu, on hold-out test sets across different preprocessing and feature configurations — indicating the selected tabular features contain meaningful signal for the target outcome.

## Potential Applications

These results demonstrate the feasibility of using XGBoost models for predictive tasks in a cloud environment, such as large-scale risk scoring, classification, or anomaly detection. Deploying via SageMaker enables scalable training and inference, supporting integration into production pipelines or decision-support systems.

## Limitations

- Limited diversity in training data may reduce generalization.
- Model interpretability is limited without feature-importance analysis.

## Future Work

- Expand the training dataset across more diverse populations or conditions
- Implement additional feature engineering or selection methods
- Explore ensemble or hybrid models to improve generalization
- Incorporate explainability tools (e.g., SHAP, feature importance)
- Deploy real-time inference pipelines on SageMaker endpoints

## Continuing the Project

This project is designed to be extensible. Future contributors could build on this work by integrating new datasets, testing alternative algorithms, automating model retraining on SageMaker, or combining model outputs with other analytics systems in production environments.
