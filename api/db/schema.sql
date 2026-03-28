-- Tabla de productos disponibles para pedidos
create table products (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  description text,
  price       numeric(10, 2) not null,  -- precio unitario (minorista referencial)
  unit        text not null default 'unidad',  -- ej: kg, litro, unidad, docena
  category    text,                            -- ej: verduras, lacteos, limpieza
  available   boolean not null default true,
  created_at  timestamptz not null default now()
);

-- Datos de ejemplo
insert into products (name, description, price, unit, category) values
  ('Arroz', 'Arroz largo fino', 1.20, 'kg', 'secos'),
  ('Aceite de girasol', 'Botella 900ml', 2.50, 'unidad', 'secos'),
  ('Leche entera', 'Caja 1 litro', 1.10, 'litro', 'lacteos'),
  ('Yerba mate', 'Paquete 500g', 3.00, 'unidad', 'infusiones'),
  ('Detergente', 'Botella 750ml', 1.80, 'unidad', 'limpieza');
