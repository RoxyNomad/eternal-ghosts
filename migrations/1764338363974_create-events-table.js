// migrations/xxxx_create_events_table.js
exports.up = pgm => {
  pgm.createTable("events", {
    id: "id",
    title: { type: "text", notNull: true },
    date: { type: "timestamp", notNull: true },
    location: { type: "text" }
  });
};

exports.down = pgm => {
  pgm.dropTable("events");
};
