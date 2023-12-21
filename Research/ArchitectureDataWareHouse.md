# Data WareHouse

## Data Modelling

### Tables types

More Popular Table Types:

- 1. Fact Table:

  - Purpose: Stores quantitative, numeric data representing business measures, events, or transactions.
  - Common Use Case: Central to data warehousing and analytics, used to calculate metrics and perform analyses.

- 2. Dimension Table:

  - Purpose: Contains descriptive attributes and metadata for categorizing, filtering, and providing context to data in fact tables.
  - Common Use Case: Used to enrich fact data with dimensions such as time, geography, or product.

- 3. Bridge Table:

  - Purpose: Resolves many-to-many relationships between dimension tables by containing foreign keys from multiple dimensions.
  - Common Use Case: Necessary when multiple dimensions relate to each other through many-to-many associations.

- 4. Lookup Table:

  - Purpose: Stores descriptive information for reporting and analysis, reducing redundancy in dimension tables.
  - Common Use Case: Used for reference data such as customer types or product categories.

- 5. Slowly Changing Dimension (SCD) Table (Type 1 and Type 2):

  - Purpose:(Type 1) Overwrites old data with new data.
  - Purpose:(Type 2) Maintains historical versions of data.
  - Common Use Cases: Type 1 for simple updates; Type 2 for tracking historical changes in dimension data.

- 6. Aggregate Table:

  - Purpose: Contains precomputed summary data to improve query performance in data warehouses.
  - Common Use Case: Speeding up complex queries that require aggregation of fact data.

- 7. Temporality Table:

  - Purpose: Models temporal data with effective date ranges for attributes, enabling historical tracking.
  - Common Use Case: Used to track historical changes in data such as employee positions or product prices.

- 8. Staging Table:

  - Purpose: Temporarily stores data before transformation and loading into a data warehouse (ETL process).
  - Common Use Case: Part of the ETL process to clean, transform, and load data into a data warehouse.

- 9. Snapshot Table:

  - Purpose: Captures point-in-time data at intervals, used for historical analysis and reporting.
  - Common Use Case: Analyzing trends over time, reporting on historical states of data.

- 10. Dimension Hierarchy Table:

  - Purpose: Represents hierarchical relationships within dimension data, common in organizational or geographical hierarchies.
  - Common Use Case: Navigating hierarchical structures in data, such as product categories or organizational hierarchies.

- 11. Junction Table:

  - Purpose: Resolves many-to-many relationships in relational databases by containing pairs of foreign keys from related tables.
  - Common Use Case: Handling associations between entities where each entity can be related to multiple others.

- 12. Virtual or Derived Table:
  - Purpose: Dynamically created through SQL queries or views, simplifying complex queries or aggregating data.
  - Common Use Case: Simplifying query complexity, aggregating data for reporting purposes.

**Less Common Table Types:**

- 13. Audit Trail Table:

  - Purpose: Logs changes to data for auditing and compliance purposes, capturing details of who, what, and when.
  - Common Use Case: Ensuring data integrity, tracking changes for compliance.

- 14. Logging Table:

  - Purpose: Records application events, errors, or activity for monitoring and debugging.
  - Common Use Case: Debugging applications, monitoring performance and behavior.

- 15. Temporal Table:

  - Purpose: Stores time-varying data for precise tracking of changes over time.
  - Common Use Case: Analyzing historical trends and changes in data.

- 16. Versioning Table:

  - Purpose: Maintains multiple versions of data for comparison and retrieval of different data states.
  - Common Use Case: Managing versions of documents or records.

- 17. Factless Fact Table:

  - Purpose: Contains no measurable data but represents relationships between dimensions.
  - Common Use Case: Capturing events or relationships without numeric measurements.

- 18. Hierarchy Bridge Table:

  - Purpose: Manages complex hierarchical relationships between dimension tables.
  - Common Use Case: Handling intricate hierarchical structures in data.

- 19. Materialized View (Not technically a table, but used in modeling):

  - Purpose: Precomputed result sets stored as tables to improve query performance.
  - Common Use Case: Accelerating query performance for frequently accessed data.

- 20. Data Enrichment Table:

  - Purpose: Stores additional information about entities to enhance the data model.
  - Common Use Case: Enhancing data with supplementary information for analytics or recommendations.

- 21. Link Table:

  - Purpose: Models many-to-many relationships for specific use cases.
  - Common Use Case: Handling complex many-to-many associations.

- 22. Parameter Table:
  - Purpose: Stores configuration or reference data used in applications.
  - Common Use Case: Managing application settings and configuration data.

### Schemas

- Star Schema
  - Galaxy Schema
- Snowflake Schema

- Fact Constellation Schema
- Bridge Table Schema
- Snowflake Constellation Schema
- Hierarchy-Based Schema
- Data Vault Schema
- Federated Schema

### Schemas & Tables 

Star Schema:
- Often used in data warehousing.
- Features a central fact table connected to dimension tables.
- Fact tables in star schemas are typically represented by Fact Tables in data modeling.

Snowflake Schema:
- Also commonly used in data warehousing.
- A variation of the star schema where dimension tables are normalized.
- Dimension tables in snowflake schemas may be represented by Dimension Tables in data modeling.

Fact Constellation Schema:
- Comprises multiple fact tables connected to shared dimension tables.
- Fact tables in fact constellation schemas correspond to Fact Tables in data modeling.

Bridge Table Schema:
- Bridge tables are used to resolve many-to-many relationships between dimension tables.
- Bridge tables in data modeling align with the concept of Bridge Tables.

Hierarchy-Based Schema:
- Used when hierarchies are significant, such as organizational structures.
- Hierarchy Bridge Tables in data modeling are relevant for modeling hierarchies.

Data Vault Schema:
- A methodology for modeling data warehouses that emphasizes flexibility and scalability.
- Data modeling often includes concepts like Slowly Changing Dimension Tables and Bridge Tables, which can be part of a Data Vault design.

Federated Schema:
- Involves integrating data from multiple sources without physically merging them.
- Lookup Tables, Fact Tables, and Bridge Tables can be used in federated schema modeling when integrating data.

### Tools

- Microsoft SQL Server Management Studio (SSMS)
- Draw.IO
- ERWin Data Modeler

### Elements and Notations

#### Elements

- Entity
- Attribute
- Primary Key(PK)
- Foreign Key(FK)
- Relationship
  - one-to-one
  - one-to-many
  - many-to-many
- Cardinality
- Associative Entity

#### Directions

- Crow's Foot Notation
- Chen Notation
- UML Notation
- Barker Notation
- IDEF1X Notation
- Connectors
