// migrations/1766223869074
exports.up = pgm => {
    pgm.createTable("news", {
        id: {
            type: "integer",
            primaryKey: true,
            generated: { always: true },
            identity: true,
        },

        title: {
            type: "text",
            notNull: true,
        },

        content: {
            type: "text",
            notNull: true,
        },

        image_url: {
            type: "text",
            notNull: false,
        },

        published_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now()"),
        },

        created_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now()"),
        },

        updated_at: {
            type: "timestamptz",
            notNull: true,
            default: pgm.func("now()"),
        },
    });

    // Für Sortierung auf der News-Seite
    pgm.createIndex("news", "published_at");
};

exports.down = pgm => {
    pgm.dropTable("news");
};
