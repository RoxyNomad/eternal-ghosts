// migrations/17643258425401_band-members.js
exports.up = pgm => {
  pgm.createTable("band_members", {
    id: "id",
    name: { type: "text", notNull: true },
    role: { type: "text", notNull: true },
    image_url: { type: "text", notNull: false }
  });
};

exports.down = pgm => {
  pgm.dropTable("band_members");
};
