import { Rol } from '../../../domain/rol/rol';
import { RolRepository } from '../../../application/ports/rol/rol.repository';

export class InMemoryRolRepository implements RolRepository {
    private rols: Rol[] = [];

    async create(rol: Rol): Promise<Rol> {
        this.rols.push(rol);
        return rol;
    }

    async findById(id: number): Promise<Rol | null> {
        const rol = this.rols.find(r => r.id_rol === id);
        return rol || null;
    }

    async findAll(): Promise<Rol[]> {
        return this.rols;
    }

    async update(id: number, rol: Partial<Rol>): Promise<Rol | null> {
        const index = this.rols.findIndex(r => r.id_rol === id);
        if (index === -1) {
            return null;
        }
        const updatedRol = { ...this.rols[index], ...rol };
        this.rols[index] = updatedRol;
        return updatedRol;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.rols.findIndex(r => r.id_rol === id);
        if (index === -1) {
            return false;
        }
        this.rols.splice(index, 1);
        return true;
    }
}
