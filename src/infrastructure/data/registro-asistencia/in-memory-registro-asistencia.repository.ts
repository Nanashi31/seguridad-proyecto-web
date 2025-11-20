import { RegistroAsistencia } from '../../../domain/registro-asistencia/registro-asistencia';
import { RegistroAsistenciaRepository } from '../../../application/ports/registro-asistencia/registro-asistencia.repository';

export class InMemoryRegistroAsistenciaRepository implements RegistroAsistenciaRepository {
    private registrosAsistencia: RegistroAsistencia[] = [];

    async create(registroAsistencia: RegistroAsistencia): Promise<RegistroAsistencia> {
        this.registrosAsistencia.push(registroAsistencia);
        return registroAsistencia;
    }

    async findById(id: number): Promise<RegistroAsistencia | null> {
        const registroAsistencia = this.registrosAsistencia.find(r => r.id_registro === id);
        return registroAsistencia || null;
    }

    async findAll(): Promise<RegistroAsistencia[]> {
        return this.registrosAsistencia;
    }

    async update(id: number, registroAsistencia: Partial<RegistroAsistencia>): Promise<RegistroAsistencia | null> {
        const index = this.registrosAsistencia.findIndex(r => r.id_registro === id);
        if (index === -1) {
            return null;
        }
        const updatedRegistroAsistencia = { ...this.registrosAsistencia[index], ...registroAsistencia };
        this.registrosAsistencia[index] = updatedRegistroAsistencia;
        return updatedRegistroAsistencia;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.registrosAsistencia.findIndex(r => r.id_registro === id);
        if (index === -1) {
            return false;
        }
        this.registrosAsistencia.splice(index, 1);
        return true;
    }
}
