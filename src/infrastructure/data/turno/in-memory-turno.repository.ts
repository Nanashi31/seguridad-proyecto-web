import { Turno } from '../../../domain/turno/turno';
import { TurnoRepository } from '../../../application/ports/turno/turno.repository';

export class InMemoryTurnoRepository implements TurnoRepository {
    private turnos: Turno[] = [];

    async create(turno: Turno): Promise<Turno> {
        this.turnos.push(turno);
        return turno;
    }

    async findById(id: number): Promise<Turno | null> {
        const turno = this.turnos.find(t => t.id_turno === id);
        return turno || null;
    }

    async findAll(): Promise<Turno[]> {
        return this.turnos;
    }

    async update(id: number, turno: Partial<Turno>): Promise<Turno | null> {
        const index = this.turnos.findIndex(t => t.id_turno === id);
        if (index === -1) {
            return null;
        }
        const updatedTurno = { ...this.turnos[index], ...turno };
        this.turnos[index] = updatedTurno;
        return updatedTurno;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.turnos.findIndex(t => t.id_turno === id);
        if (index === -1) {
            return false;
        }
        this.turnos.splice(index, 1);
        return true;
    }
}
