// migrations/1764326132518_seed-band-members.js
exports.up = pgm => {
  pgm.sql(`
    INSERT INTO band_members (name, role, image_url) VALUES
    ('Filippo Milazzo', 'Guitars', 'https://res.cloudinary.com/dszfev5rp/image/upload/v1764162986/055-2_wrogcf.png'),
    ('Christian Loser', 'Bass', 'https://res.cloudinary.com/dszfev5rp/image/upload/v1764162986/065-2_hzshq4.png'),
    ('John Landgraf', 'Drum', 'https://res.cloudinary.com/dszfev5rp/image/upload/v1764162987/051-2_y3xopf.png'),
    ('Rene Ninghetto', 'Vocals and Guitars', 'https://res.cloudinary.com/dszfev5rp/image/upload/v1764162986/061-2_iwtern.png');
  `);
};

exports.down = pgm => {
  pgm.sql(`DELETE FROM band_members;`);
};
