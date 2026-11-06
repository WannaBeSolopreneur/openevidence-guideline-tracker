(function () {
  var data = window.SITE_DATA;
  if (!data) return;

  function text(id, value) {
    var node = document.getElementById(id);
    if (node && value) node.textContent = value;
  }

  function when(value) {
    if (!value) return "";
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var day = date.getUTCDate();
    var hours = String(date.getUTCHours()).padStart(2, "0");
    var minutes = String(date.getUTCMinutes()).padStart(2, "0");
    return day + " " + months[date.getUTCMonth()] + " " + date.getUTCFullYear() + " " + hours + ":" + minutes;
  }

  function dayOnly(value) {
    if (!value) return "";
    var date = new Date(value);
    if (Number.isNaN(date.getTime())) return String(value).slice(0, 10);
    var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return date.getUTCDate() + " " + months[date.getUTCMonth()] + " " + date.getUTCFullYear();
  }

  var company = data.company || {};
  text("company", company.company);
  text("role", company.role);
  text("hero-line", company.heroLine);
  text("disclaimer", company.disclaimer);
  text("problem", company.problem);
  text("solution", company.solution);
  var role = document.getElementById("role-link");
  if (role && company.roleUrl) role.href = company.roleUrl;
  var email = document.getElementById("team-email");
  if (email && company.teamEmail) {
    email.href = "mailto:" + company.teamEmail;
    email.textContent = company.teamEmail;
  }
  text("updated", "Last updated " + when(data.generated_at) + " (UTC)");

  var goals = document.getElementById("goals");
  (data.goals || []).forEach(function (goal) {
    var card = document.createElement("article");
    card.className = "goal";
    var title = document.createElement("h3");
    title.textContent = goal.label;
    var pill = document.createElement("span");
    pill.className = "pill " + goal.status;
    pill.textContent = goal.status_label;
    title.appendChild(document.createTextNode(" "));
    title.appendChild(pill);
    var value = document.createElement("p");
    value.className = "value";
    value.textContent = goal.current_label;
    var meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = "Target " + goal.target_label + ". " + goal.detail;
    var bar = document.createElement("div");
    bar.className = "bar";
    var fill = document.createElement("span");
    var ratio = Number(goal.progress_ratio);
    if (!Number.isFinite(ratio) || ratio < 0) ratio = 0;
    if (ratio > 1) ratio = 1;
    fill.style.width = Math.round(ratio * 100) + "%";
    bar.appendChild(fill);
    if (goal.metric_kind === "pace" && goal.pace_ratio != null) {
      var tick = document.createElement("i");
      tick.className = "pace";
      var pace = Math.max(0, Math.min(1, Number(goal.pace_ratio)));
      tick.style.left = Math.round(pace * 100) + "%";
      bar.appendChild(tick);
    }
    card.appendChild(title);
    card.appendChild(value);
    card.appendChild(meta);
    card.appendChild(bar);
    goals.appendChild(card);
  });

  var fresh = document.getElementById("fresh");
  (data.sources || []).forEach(function (source) {
    var card = document.createElement("article");
    card.className = "source";
    var title = document.createElement("h3");
    title.textContent = source.source_name;
    var meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = source.record_count + " items in this pull. Fetched " + when(source.fetched_at) + " (UTC). Newest publish " + dayOnly(source.latest_published_at) + ".";
    card.appendChild(title);
    card.appendChild(meta);
    fresh.appendChild(card);
  });

  var actions = document.getElementById("actions");
  (data.actions || []).forEach(function (action) {
    var item = document.createElement("li");
    var link = document.createElement("a");
    link.href = action.source_url;
    link.textContent = action.title;
    var line = document.createElement("div");
    line.textContent = action.sentence + " " + action.source_name + ". " + dayOnly(action.published_at) + ".";
    item.appendChild(link);
    item.appendChild(line);
    actions.appendChild(item);
  });

  var feed = document.getElementById("feed");
  (data.feed || []).forEach(function (row) {
    var card = document.createElement("article");
    card.className = "item";
    var badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = row.source_name;
    var title = document.createElement("h3");
    var link = document.createElement("a");
    link.href = row.source_url;
    link.textContent = row.title;
    title.appendChild(link);
    var meta = document.createElement("p");
    meta.className = "meta";
    var bits = [dayOnly(row.published_at), row.area];
    if (row.code_label) bits.push(row.code_label);
    if (row.impact_reason) bits.push(row.impact_reason);
    meta.textContent = bits.join(". ");
    card.appendChild(badge);
    card.appendChild(title);
    card.appendChild(meta);
    feed.appendChild(card);
  });

  var build = data.build || {};
  text(
    "build-counts",
    "This build passed " + build.tests_passed + " of " + build.tests_total + " dbt tests. Source freshness passed " + build.freshness_passed + " of " + build.freshness_total + " checks."
  );
  var models = document.getElementById("models");
  (build.models || []).forEach(function (name) {
    var item = document.createElement("li");
    item.textContent = name;
    models.appendChild(item);
  });

  var profile = data.profile || {};
  var about = document.getElementById("about");
  var heading = document.createElement("h2");
  heading.textContent = "About me";
  var who = document.createElement("p");
  who.textContent = profile.about || "";
  var links = document.createElement("p");
  links.className = "links";
  (profile.links || []).forEach(function (link) {
    var anchor = document.createElement("a");
    anchor.href = link.href;
    anchor.textContent = link.label;
    links.appendChild(anchor);
  });
  about.appendChild(heading);
  about.appendChild(who);
  about.appendChild(links);

  if (!window.Chart) return;
  Chart.defaults.animation = false;
  Chart.defaults.font.family = "Avenir Next, Segoe UI, sans-serif";
  Chart.defaults.font.size = 14;

  var areas = data.areas || [];
  new Chart(document.getElementById("area-chart"), {
    type: "bar",
    data: {
      labels: areas.map(function (row) { return row.area; }),
      datasets: [{
        label: "Items",
        data: areas.map(function (row) { return row.item_count; }),
        backgroundColor: "#1b2a41"
      }]
    },
    options: {
      indexAxis: "y",
      plugins: { legend: { display: false } },
      scales: { x: { beginAtZero: true, ticks: { precision: 0 } } }
    }
  });

  var order = ["FDA labels", "FDA recalls", "Federal Register", "CDC MMWR"];
  var colors = {
    "FDA labels": "#1b2a41",
    "FDA recalls": "#8c3d52",
    "Federal Register": "#1f6b4a",
    "CDC MMWR": "#a7c7e7"
  };
  var weeks = [];
  (data.weekly || []).forEach(function (row) {
    if (weeks.indexOf(row.week_start) === -1) weeks.push(row.week_start);
  });
  weeks.sort();
  var datasets = order.map(function (name) {
    return {
      label: name,
      borderColor: colors[name],
      backgroundColor: colors[name],
      tension: 0.2,
      data: weeks.map(function (week) {
        var match = (data.weekly || []).find(function (row) {
          return row.week_start === week && row.source_name === name;
        });
        return match ? match.item_count : 0;
      })
    };
  });
  new Chart(document.getElementById("week-chart"), {
    type: "line",
    data: {
      labels: weeks.map(function (week) { return dayOnly(week); }),
      datasets: datasets
    },
    options: {
      plugins: { legend: { position: "bottom" } },
      scales: { y: { beginAtZero: true, ticks: { precision: 0 } } }
    }
  });
})();
