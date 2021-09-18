CREATE TABLE todos ( id SERIAL PRIMARY KEY, text TEXT NOT NULL, done BOOLEAN DEFAULT FALSE);
INSERT INTO todos (text) VALUES('First todo'), ('Second todo');