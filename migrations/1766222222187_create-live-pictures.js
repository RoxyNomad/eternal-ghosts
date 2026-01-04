// migrations/1766222222187_create-events-pictures.js
exports.up = pgm => {
    pgm.createTable("live_pictures", {
        id: {
            type: "integer",
            primaryKey: true,
            generated: { always: true },
            identity: true,
        },

        image_url: {
            type: "text",
            notNull: false,
        },

        location_id: {
            type: "integer",
            notNull: false,
            references: "locations(id)",
            onDelete: "CASCADE",
        },

        date: {
            type: "date",
            notNull: false,
        },
    });

    pgm.createIndex('live_pictures', 'location_id');
};

exports.down = pgm => {
    pgm.dropTable("live_pictures");
};