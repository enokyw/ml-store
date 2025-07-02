CREATE TABLE orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES users(id),
    total_amount JSONB,
    status VARCHAR(50) CHECK (status IN ('pending', 'processing', 'shipped', 'delivered', 'cancelled')) NOT NULL,
    payment_method VARCHAR(50) CHECK (payment_method IN ('credit_card', 'debit_card', 'cash', 'transfer', 'yape', 'plin', 'other')),
    payment_status VARCHAR(50) CHECK (payment_status IN ('pending', 'paid', 'failed')),
    payment_id VARCHAR(255),
    shipping_address JSONB,
    billing_address JSONB,
    shipping_method VARCHAR(50) CHECK (shipping_method IN ('standard', 'express', 'pickup')),
    shipping_cost JSONB,
    tax_rate JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    order_id UUID REFERENCES orders(id),
    product_id UUID REFERENCES products(id),
    quantity INT NOT NULL,
    price JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (order_id, product_id)
);
