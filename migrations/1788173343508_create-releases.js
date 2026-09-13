/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('releases', {
    id: {
      type: 'uuid',
      default: pgm.func('gen_random_uuid()'),
      primaryKey: true,
    },
    title: {
      type: 'varchar(255)',
      notNull: true,
    },
    release_type: {
      type: 'varchar(50)',
      notNull: true,
    },
    release_date: {
      type: 'date',
      notNull: true,
    },
    cover_image_url: {
      type: 'text',
      notNull: true,
    },
    cover_image_public_id: {
      type: 'text',
      notNull: true,
    },
    description: {
      type: 'text',
      notNull: false,
    },
    created_at: {
      type: 'timestamp with time zone',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
    updated_at: {
      type: 'timestamp with time zone',
      notNull: true,
      default: pgm.func('current_timestamp'),
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('releases');
};