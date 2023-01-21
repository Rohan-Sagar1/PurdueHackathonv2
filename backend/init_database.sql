CREATE TABLE userinfo (
    id UUID PRIMARY KEY,
	password STRING,
	email STRING,
	firstname STRING,
	lastname STRING,
	tags STRING ARRAY,
	posts UUID ARRAY,
	media BYTES ARRAY
);
CREATE TABLE posts (
    id UUID PRIMARY KEY,
	title STRING,
	description STRING,
	tags STRING ARRAY,
	author UUID,
	applicants UUID ARRAY,
	media BYTES ARRAY
);