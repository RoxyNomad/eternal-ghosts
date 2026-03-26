// migrations/1774533504962_create-biography.js
exports.up = pgm => {
    pgm.createTable("biography", {
        id: {
            type: "integer",
            primaryKey: true,
            generated: "always",
        },

        title: {
            type: "text",
            notNull: true,
        },

        content: {
            type: "text",
            notNull: true,
        },

        published_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("now()"),
        },

        created_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("now()"),
        },

        updated_at: {
            type: "timestamp",
            notNull: true,
            default: pgm.func("now()"),
        },
    });

    pgm.createIndex("biography", "published_at");
};

exports.down = pgm => {
    pgm.dropTable("biography");
};
