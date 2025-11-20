import { EquipoAsignado } from '../../../domain/equipo-asignado/equipo-asignado';
import { EquipoAsignadoRepository } from '../../../application/ports/equipo-asignado/equipo-asignado.repository';

export class InMemoryEquipoAsignadoRepository implements EquipoAsignadoRepository {
    private equiposAsignados: EquipoAsignado[] = [];

    async create(equipoAsignado: EquipoAsignado): Promise<EquipoAsignado> {
        this.equiposAsignados.push(equipoAsignado);
        return equipoAsignado;
    }

    async findById(id: number): Promise<EquipoAsignado | null> {
        const equipoAsignado = this.equiposAsignados.find(e => e.id_asignacion === id);
        return equipoAsignado || null;
    }

    async findAll(): Promise<EquipoAsignado[]> {
        return this.equiposAsignados;
    }

    async update(id: number, equipoAsignado: Partial<EquipoAsignado>): Promise<EquipoAsignado | null> {
        const index = this.equiposAsignados.findIndex(e => e.id_asignacion === id);
        if (index === -1) {
            return null;
        }
        const updatedEquipoAsignado = { ...this.equiposAsignados[index], ...equipoAsignado };
        this.equiposAsignados[index] = updatedEquipoAsignado;
        return updatedEquipoAsignado;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.equiposAsignados.findIndex(e => e.id_asignacion === id);
        if (index === -1) {
            return false;
        }
        this.equiposAsignados.splice(index, 1);
        return true;
    }
}
