import { Incidente } from '../../../domain/incidente/incidente';
import { IncidenteRepository } from '../../../application/ports/incidente/incidente.repository';

export class InMemoryIncidenteRepository implements IncidenteRepository {
    private incidentes: Incidente[] = [];

    async create(incidente: Incidente): Promise<Incidente> {
        this.incidentes.push(incidente);
        return incidente;
    }

    async findById(id: number): Promise<Incidente | null> {
        const incidente = this.incidentes.find(i => i.id_incidente === id);
        return incidente || null;
    }

    async findAll(): Promise<Incidente[]> {
        return this.incidentes;
    }

    async update(id: number, incidente: Partial<Incidente>): Promise<Incidente | null> {
        const index = this.incidentes.findIndex(i => i.id_incidente === id);
        if (index === -1) {
            return null;
        }
        const updatedIncidente = { ...this.incidentes[index], ...incidente };
        this.incidentes[index] = updatedIncidente;
        return updatedIncidente;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.incidentes.findIndex(i => i.id_incidente === id);
        if (index === -1) {
            return false;
        }
        this.incidentes.splice(index, 1);
        return true;
    }
}
