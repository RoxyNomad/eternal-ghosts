// migrations/1766221543569_create-locations.js
exports.up = pgm => {
    pgm.createTable("locations", {
        id: {
            type: "serial",
            primaryKey: true,
        },

        name: {
            type: "text",
            notNull: true,
            unique: true,
        },

        image_url: {
            type: "text",
            notNull: false,
        },
    });

    pgm.createIndex("locations", "name", { unique: true });
};

exports.down = pgm => {
    pgm.dropTable("locations");
};