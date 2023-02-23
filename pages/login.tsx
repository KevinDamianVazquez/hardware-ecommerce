import Layout from "@/components/layout";
import Link from "next/link";
import React from "react";

export default function Login(){
    return (
        <Layout title="Login">
            <div className="flex justify-center items-center">
                <form className="flex flex-col justify-between p-8 h-60 shadow-xl">
                    <p className="text-center">Inicia sesión</p>
                    <input type="email" placeholder="Email" className="h-10 input"/>
                    <input type="password" placeholder="Contraseña" className="h-10  input"/>
                    <p>Aren`t you registered yet? <Link href="/register"><p className="inline text-sky-600">Register</p></Link></p>
                </form>
            </div>
        </Layout>
    );
}