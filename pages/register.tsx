import React from "react";
import Layout from "@/components/layout";

export default function Register(){
    return (
        <Layout title="Register">
            <div className="flex flex-col justify-center items-center">
                <form className="shadow-2xl flex flex-col p-8 gap-3">
                    <input type="text" placeholder="Nombre completo" className="input"/>
                    <input type="email" placeholder="Email" className="input"/>
                    <input type="password" placeholder="Contraseña" className="input"/>
                    <button>Registrarse</button>
                </form>
            </div>
        </Layout>
    );
}