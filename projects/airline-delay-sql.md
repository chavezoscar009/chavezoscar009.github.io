---
layout: project
title: "Airline Delay: Automated SQL Query and Visualization Tool"
summary: "A SQLite-based pipeline that automates ingestion of airline delay data and produces analytics-ready SQL views for BI tools."
github_url: "https://github.com/astroscar09/airline_delay_project"
permalink: /projects/airline-delay-sql/
---

## Overview

This project demonstrates end-to-end database design and automation using SQL and Python. The pipeline ingests raw airline delay files into a structured SQLite database, tracks file-level ingestion state, and generates reusable SQL views optimized for analysis and visualization — including a published [Tableau Public dashboard](https://public.tableau.com/app/profile/oscar.chavez.ortiz/viz/NewAirlineData/Dashboard1).

## Project Goal

The primary goal was to showcase practical SQL skills, including database schema design, automated data ingestion, and transforming raw data into visualization-ready tables consumable directly by business intelligence tools.

## Approach &amp; Methods

A relational SQLite database was designed with separate tables for raw airline delay records and file ingestion tracking. The ingestion pipeline automatically detects new data files placed in a designated `data/raw` directory and appends their contents to the main airlines table.

An ingestion log table ensures idempotency by preventing duplicate inserts, while SQL views pre-aggregate and reshape the data into analysis-friendly formats suitable for visualization tools such as Tableau.

## Key Findings

> The pipeline enables reliable, repeatable ingestion of airline delay data and produces consistent, visualization-ready datasets without requiring manual data cleaning or transformation.

## Interpretation

This project illustrates how thoughtful database design and SQL-based transformations can simplify downstream analytics workflows. By pushing data cleaning and aggregation into the database layer, visualization tools can operate on stable, well-defined tables and views — the end product can feed into Tableau, Power BI, or similar software. The ingestion tracking table reflects real-world data engineering practice, ensuring the pipeline can be safely rerun as new data becomes available.

## Potential Applications

This architecture applies to any recurring data ingestion problem, including operational metrics, financial reporting, and ETL pipelines where new data files arrive incrementally and must be integrated into an existing database for analysis.

## Limitations

- Uses SQLite, which isn't optimized for high-concurrency or very large datasets.
- Designed for batch ingestion rather than real-time streaming data.
- Relies on consistent input file schemas.

## Future Work

Future enhancements could include migrating to a production-grade database (e.g., PostgreSQL), adding data validation checks, supporting incremental updates, and integrating automated reporting or dashboard-refresh workflows.

## Continuing the Project

The project can be extended to support additional data sources, more complex SQL transformations, and tighter integration with visualization platforms. The modular design lets the ingestion and transformation logic be reused for similar database-driven analytics projects.
