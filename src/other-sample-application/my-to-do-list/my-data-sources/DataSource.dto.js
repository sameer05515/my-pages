class DataSource {
    constructor(
      sourceName = "Unknown Source",
      sourceType = "Unknown Type",
      location = "Unknown Location",
      repositoryOrDbName = "N/A",
      lastModified = null,
      owner = "Unknown Owner",
      purpose = "No Purpose Specified",
      criticality = "Low",
      notes = ""
    ) {
      this.sourceName = sourceName;
      this.sourceType = sourceType;
      this.location = location;
      this.repositoryOrDbName = repositoryOrDbName;
      this.lastModified = lastModified ? new Date(lastModified) : null; // Convert to Date object if provided
      this.owner = owner;
      this.purpose = purpose;
      this.criticality = criticality;
      this.notes = notes;
    }
  
    /**
     * Static method to create a `DataSource` instance from a raw object.
     * @param {Object} obj - The raw object containing data for the data source.
     * @returns {DataSource} A new DataSource instance.
     */
    static fromObject(obj = {}) {
      return new DataSource(
        obj.sourceName || "Unknown Source",
        obj.sourceType || "Unknown Type",
        obj.location || "Unknown Location",
        obj.repositoryOrDbName || "N/A",
        obj.lastModified || null,
        obj.owner || "Unknown Owner",
        obj.purpose || "No Purpose Specified",
        obj.criticality || "Low",
        obj.notes || ""
      );
    }
  }
  
  export default DataSource;
  