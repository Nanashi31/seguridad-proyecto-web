import { Usuario } from '../../../domain/usuario/usuario';
import { UsuarioRepository } from '../../../application/ports/usuario/usuario.repository';

export class InMemoryUsuarioRepository implements UsuarioRepository {
    private usuarios: Usuario[] = [];

    async create(usuario: Usuario): Promise<Usuario> {
        this.usuarios.push(usuario);
        return usuario;
    }

    async findById(id: number): Promise<Usuario | null> {
        const usuario = this.usuarios.find(u => u.id_usuario === id);
        return usuario || null;
    }

    async findAll(): Promise<Usuario[]> {
        return this.usuarios;
    }

    async update(id: number, usuario: Partial<Usuario>): Promise<Usuario | null> {
        const index = this.usuarios.findIndex(u => u.id_usuario === id);
        if (index === -1) {
            return null;
        }
        const updatedUsuario = { ...this.usuarios[index], ...usuario };
        this.usuarios[index] = updatedUsuario;
        return updatedUsuario;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.usuarios.findIndex(u => u.id_usuario === id);
        if (index === -1) {
            return false;
        }
        this.usuarios.splice(index, 1);
        return true;
    }
}
