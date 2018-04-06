UPDATE properties
SET name = $2, description = $3, address = $4, city = $5, state = $6,  zip = $7, loan = $8,  monthPrice = $9,  rent = $10
WHERE id = $1;