import { EvidenciaIncidente } from '../../../domain/evidencia-incidente/evidencia-incidente';
import { EvidenciaIncidenteRepository } from '../../../application/ports/evidencia-incidente/evidencia-incidente.repository';

export class InMemoryEvidenciaIncidenteRepository implements EvidenciaIncidenteRepository {
    private evidenciasIncidentes: EvidenciaIncidente[] = [];

    async create(evidenciaIncidente: EvidenciaIncidente): Promise<EvidenciaIncidente> {
        this.evidenciasIncidentes.push(evidenciaIncidente);
        return evidenciaIncidente;
    }

    async findById(id: number): Promise<EvidenciaIncidente | null> {
        const evidenciaIncidente = this.evidenciasIncidentes.find(e => e.id_evidencia === id);
        return evidenciaIncidente || null;
    }

    async findAll(): Promise<EvidenciaIncidente[]> {
        return this.evidenciasIncidentes;
    }

    async update(id: number, evidenciaIncidente: Partial<EvidenciaIncidente>): Promise<EvidenciaIncidente | null> {
        const index = this.evidenciasIncidentes.findIndex(e => e.id_evidencia === id);
        if (index === -1) {
            return null;
        }
        const updatedEvidenciaIncidente = { ...this.evidenciasIncidentes[index], ...evidenciaIncidente };
        this.evidenciasIncidentes[index] = updatedEvidenciaIncidente;
        return updatedEvidenciaIncidente;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.evidenciasIncidentes.findIndex(e => e.id_evidencia === id);
        if (index === -1) {
            return false;
        }
        this.evidenciasIncidentes.splice(index, 1);
        return true;
    }
}
