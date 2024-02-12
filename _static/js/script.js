

document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/ci-data.json")
      .then(response => response.json())
      .then(data => {
        // Display statistics tables
        const tablesContainer = document.getElementById("tables-container");
        const ciRunTable = createTable(data, "CI Stats");
        tablesContainer.appendChild(ciRunTable);

        function createTable(data, title) {
          const table = document.createElement("table");
          table.innerHTML = `
        <thead>
            <tr>
                <th>Run ID</th>
                <th>Run Start Time</th>
                <th>Run End Time</th>
                <th>Status</th>
                <th>Total Tests</th>
                <th>Total Failed</th>
                <th>Total Skipped</th>
                <th>Full Test Link</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(run => `
                <tr>
                    <td>${run.id}</td>
                    <td>${run.run_start_time}</td>
                    <td>${run.run_end_time}</td>
                    <td>${run.status}</td>
                    <td>${run.total_tests}</td>
                    <td>${run.total_failed}</td>
                    <td>${run.total_skipped}</td>
                    <td>${run.result_link}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
          return table;
        }
      });
});