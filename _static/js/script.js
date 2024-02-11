

document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/ci-data.json")
      .then(response => response.json())
      .then(data => {
        // Display statistics tables
        const tablesContainer = document.getElementById("tables-container");
        const ciRunTable = createTable(data.data, "CI Stats");
        tablesContainer.appendChild(ciRunTable);

        function createTable(data, title) {
          const table = document.createElement("table");
          table.innerHTML = `
        <thead>
            <tr>
                <th>Run Start Time</th>
                <th>Run End Time</th>
                <th>Total Tests</th>
                <th>Total Failed</th>
                <th>Total Skipped</th>
                <th>Full Test Link</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(stat => `
                <tr>
                    <td>${stat.run_start_time}</td>
                    <td>${stat.run_end_time}</td>
                    <td>${stat.total_tests}</td>
                    <td>${stat.total_failed}</td>
                    <td>${stat.total_failed}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
          return table;
        }
      });
});