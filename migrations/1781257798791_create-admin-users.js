// migrations/1781257798791_create-admin-users.js

exports.up = (pgm) => {
  pgm.createTable("admin_users", {
    id: {
      type: "serial",
      primaryKey: true,
    },

    email: {
      type: "varchar(255)",
      notNull: true,
      unique: true,
    },

    password_hash: {
      type: "text",
      notNull: true,
    },

    created_at: {
      type: "timestamp",
      notNull: true,
      default: pgm.func("current_timestamp"),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("admin_users");
};