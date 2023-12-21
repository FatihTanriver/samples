# POWER BI - Excel - CSharp

https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-excel-stunning-report#extra-credit-write-an-expression-in-dax

## POWER BI DESKTOP

- \*.pbix (PBIX stands for Power BI eXchange)

View Types (\*.pbix)

- Report View
- Table View
- Model View

## Fields Types

- Numeric
  - Whole Number(Auto)
  - Whole Number(Integer)
  - Decimal Number(Floating-Point)
- Date and Time
  - Date
  - Time
  - Date/Time
- Text
  - Text
  - URL
- Boolean
- Currency
- Percentage
- Duration
- Geographic
  - Geography
  - Latitude and Longitude
- Custom Data Types

## STEPs

We have our data in our source Database, we want send our data
to our target system which uses Power BI

- **Step1: Import Data into Power BI**

  - Data is loaded into Power BI's internal data model.
    - ! Faster Query Performance
    - ? Limited to the data snapshot at the time of import
  - DirectQuery :
    - Data stays in the MSSQL database
    - Get Data with queries real time
      - ! Allows for up-to-date
      - ? Potentially slower query performance

- **Step2: Data Transformation**

  - Power Query Editor(Power BI) to perform data transformations
    - Filtering, Sorting, Aggregating, Merging Table, Shape the Data

- **Step3: Data Modelling**

  - Create Relationships
  - Define Calculated Columns
  - Create Measure

- **Step4: Create Visualizations**

  - Drag and drop fields onto visuals like charts, tables, and maps to create your reports and dashboards.

- **Step5: Publish to Power BI Service (Optional)**

  - Embed reports and dashboards in Applications
  - Publish your Power BI Desktop file to the
    - Power BI Service
    - MS Cloud-based platform
      - ! For sharing and collaborating on Power BI content

- **Step6: Access Data in Excel or WPF:**
  - Publish Power BI Reports to the Power BI Service
    - Via a web browser or Power BI mobile app
  - Embed Reports and Dashboards directly into your custom WPF application
  - Export Data to Excel:
    - Power BI to Excel
      - Use it in your Excel-based workflows

## JARGON

- DAX: Data Analysis Expressions

- DAX Table

- Slicer

### DAX

- Writing Measure

  - Total Units Sold = SUM(financials[Units Sold])

- Create Table
  - Calendar = CALENDAR(DATE(2013,01,01),Date(2014,12,31))

#### Joining Table

(Tbl: Financials - Calendar)(Join)

- Properties  
  !! shows info active selected data tables(properties)
  !! in Model View selected Card(Properties) or selected Relationship(Properties)

      - Relationship (Properties)[Model View]

      	- Matching Columns (Financials.Date <--> Calendar.Date)

      	- * Cardinality
      		- Many to one(*:1)
      		- One to one(1:1)
      		- One to many(1:*)
      		- Many to Many(*:*)

      		!! Info

      	- * Make this relationship active

      		!! Info


      	- * Cross filter direction
      		- Single
      		- Both


      	- * Apply security filter in both directions
      		- No
      		- Yes

      - Cards (Properties)[Model View]

      	- * Show the database in the header when applicable
      		- No
      		- Yes
      	- * Show related  fields when card is collapsed
      		- No
      		- Yes

- Data

REPORT VIEW

- Data (\*)

- Visualizations (Graph)

- Filters (\*)

- Format (Textbox)

## Security

### Options > Global > Security
