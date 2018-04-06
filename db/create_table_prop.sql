CREATE TABLE IF NOT EXISTS properties (
    id serial primary key,
    name text,
    description text,
    address text, 
    city text,
    state text, 
    zip INTEGER,
    loan INTEGER, 
    monthPrice integer,
    rent integer
);