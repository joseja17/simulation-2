insert into properties (name, description, address, city, state, zip, loan, monthPrice, rent  )
values($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *;