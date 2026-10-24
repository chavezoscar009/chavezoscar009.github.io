---
layout: project
title: "Hypothesis Testing: Golf Ball A/B Test"
summary: "A rigorous hypothesis-testing workflow comparing driving distances between a new and current golf ball design."
github_url: "https://github.com/astroscar09/DS/tree/main/Hypothesis_Testing"
permalink: /projects/hypothesis-testing/
---

Exploring whether a new golf ball design gave better performance than the currently available one.

## Overview

Par Inc. is a major manufacturer of golf equipment. Management believes Par's market share could grow with the introduction of a cut-resistant, longer-lasting golf ball, so Par's research group has been investigating a new coating designed to resist cuts and provide a more durable ball. The tests with the coating were promising, but one researcher raised a concern about its effect on driving distance — Par wants the new cut-resistant ball to offer driving distances comparable to the current model. To compare, 40 balls of each model were subjected to distance tests using a mechanical hitting machine, so any difference between the mean distances could be attributed to the design itself.

## Project Goal

- Formulate and present the rationale for a hypothesis test Par could use to compare the driving distances of the current and new golf balls.
- Analyze the data to reach a hypothesis-testing conclusion: What is the p-value? What is the recommendation for Par Inc.?
- Provide descriptive statistical summaries of the data for each model.
- Compute the 95% confidence interval for the population mean of each model, and for the difference between the two means.
- Consider whether larger sample sizes and more testing are warranted.

## Approach &amp; Methods

We conducted a series of statistical analyses to compare the driving distances of the current and new golf balls. Data from 40 samples per ball were collected, and we checked normality using the Shapiro-Wilk test, then applied paired, independent, and one-sample t-tests to assess whether there were significant differences in performance between the two models. All analyses were logged and results saved for reproducibility.

## Key Findings

- The 95% confidence interval for the current ball's driving distance is approximately 267.5–273.1 yards.
- The 95% confidence interval for the new ball's driving distance is approximately 264.3–270.7 yards.
- The 95% confidence interval for the difference (new − current) is approximately −7.17 to 1.62 yards.
- All t-tests (paired, independent, and one-sample) failed to reject the null hypothesis, indicating no statistically significant improvement with the new ball.

## Interpretation

The new golf ball doesn't demonstrate a statistically significant improvement over the current model based on the samples tested. The confidence interval for the difference includes zero, suggesting the new ball could be slightly worse or slightly better — the data are inconclusive.

## Potential Applications

These findings give Par Inc. an evidence-based assessment for evaluating new golf ball designs. Decisions about product adoption or marketing claims should be guided by this statistical analysis rather than assumptions about performance.

## Limitations

The main limitation is sample size — with only 40 drives per ball, the confidence intervals are relatively wide, limiting the ability to detect small differences in performance. Other factors, such as environmental conditions, may not have been fully controlled.

## Future Work

Future studies should include larger sample sizes to reduce uncertainty and increase statistical power, testing under a variety of conditions and with multiple players to assess the consistency and reliability of any observed differences.

## Continuing the Project

We plan to expand this experiment with more drives and additional golf ball prototypes. As more data are collected, we'll update the analysis for a clearer understanding of performance differences, potentially refining the statistical approach to include effect size and power calculations.
