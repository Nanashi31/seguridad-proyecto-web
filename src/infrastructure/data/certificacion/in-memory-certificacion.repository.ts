import { Certificacion } from '../../../domain/certificacion/certificacion';
import { CertificacionRepository } from '../../../application/ports/certificacion/certificacion.repository';

export class InMemoryCertificacionRepository implements CertificacionRepository {
    private certificaciones: Certificacion[] = [];

    async create(certificacion: Certificacion): Promise<Certificacion> {
        this.certificaciones.push(certificacion);
        return certificacion;
    }

    async findById(id: number): Promise<Certificacion | null> {
        const certificacion = this.certificaciones.find(c => c.id_certificacion === id);
        return certificacion || null;
    }

    async findAll(): Promise<Certificacion[]> {
        return this.certificaciones;
    }

    async update(id: number, certificacion: Partial<Certificacion>): Promise<Certificacion | null> {
        const index = this.certificaciones.findIndex(c => c.id_certificacion === id);
        if (index === -1) {
            return null;
        }
        const updatedCertificacion = { ...this.certificaciones[index], ...certificacion };
        this.certificaciones[index] = updatedCertificacion;
        return updatedCertificacion;
    }

    async delete(id: number): Promise<boolean> {
        const index = this.certificaciones.findIndex(c => c.id_certificacion === id);
        if (index === -1) {
            return false;
        }
        this.certificaciones.splice(index, 1);
        return true;
    }
}
