// migrations/1766223869074
exports.up = pgm => {
    pgm.createTable("news", {
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

        image_url: {
            type: "text",
            notNull: false,
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

    pgm.createIndex("news", "published_at");
};

exports.down = pgm => {
    pgm.dropTable("news");
};
