import React from "react";

const Card: React.FC<{ title: string; description: string }> = ({
    title,
    description,
}) => (
    <div
        style={{
            border: "1px solid #e5e7eb",
            borderRadius: "8px",
            padding: "24px",
            maxWidth: "320px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
            background: "#fff",
            margin: "32px auto",
        }}
    >
        <h2 style={{ margin: "0 0 12px 0", fontSize: "1.25rem" }}>{title}</h2>
        <p style={{ margin: 0, color: "#4b5563" }}>{description}</p>
    </div>
);

export default function Page() {
    return (
        <main>
            <Card
                title="Simple Card"
                description="This is a simple card component built with React and TypeScript."
            />
        </main>
    );
}