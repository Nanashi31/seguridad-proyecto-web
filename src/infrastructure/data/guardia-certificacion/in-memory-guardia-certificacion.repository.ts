import { GuardiaCertificacion } from '../../../domain/guardia-certificacion/guardia-certificacion';
import { GuardiaCertificacionRepository } from '../../../application/ports/guardia-certificacion/guardia-certificacion.repository';

export class InMemoryGuardiaCertificacionRepository implements GuardiaCertificacionRepository {
    private guardiaCertificaciones: GuardiaCertificacion[] = [];

    async create(guardiaCertificacion: GuardiaCertificacion): Promise<GuardiaCertificacion> {
        this.guardiaCertificaciones.push(guardiaCertificacion);
        return guardiaCertificacion;
    }

    async findByUsuarioId(id_usuario: number): Promise<GuardiaCertificacion[]> {
        return this.guardiaCertificaciones.filter(gc => gc.id_usuario === id_usuario);
    }

    async findAll(): Promise<GuardiaCertificacion[]> {
        return this.guardiaCertificaciones;
    }

    async update(id_usuario: number, id_certificacion: number, guardiaCertificacion: Partial<GuardiaCertificacion>): Promise<GuardiaCertificacion | null> {
        const index = this.guardiaCertificaciones.findIndex(gc => gc.id_usuario === id_usuario && gc.id_certificacion === id_certificacion);
        if (index === -1) {
            return null;
        }
        const updatedGuardiaCertificacion = { ...this.guardiaCertificaciones[index], ...guardiaCertificacion };
        this.guardiaCertificaciones[index] = updatedGuardiaCertificacion;
        return updatedGuardiaCertificacion;
    }

    async delete(id_usuario: number, id_certificacion: number): Promise<boolean> {
        const index = this.guardiaCertificaciones.findIndex(gc => gc.id_usuario === id_usuario && gc.id_certificacion === id_certificacion);
        if (index === -1) {
            return false;
        }
        this.guardiaCertificaciones.splice(index, 1);
        return true;
    }
}
