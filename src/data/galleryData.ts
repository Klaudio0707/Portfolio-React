import ApresentacaoProjeto from '@/assets/gallery/apresentacao.jpeg';
import CursoGrauTecnico from '@/assets/gallery/grautecnico.jpeg';
import GrupoTascom from '@/assets/gallery/tascom.jpeg';
import ProgramadoresSistIfpe from '@/assets/gallery/ifpe.jpeg';
import type { GalleryEvent } from '@/types/galery';


export const galleryData: GalleryEvent[] = [
    {
        id: 1,
        title: 'Programador de Sistemas · IFPE + Porto Digital (2017)',
        context: 'Ecossistema Porto Digital',
        description: 'Base da minha jornada técnica. Aprendi lógica de programação no ecossistema tecnológico de Recife, com apoio do maior hub de inovação do Nordeste.',
        image: ProgramadoresSistIfpe,
    },
    {
        id: 2,
        title: 'Fundamentos de Hardware & Redes',
        context: 'Grau Técnico',
        description: 'Início da formação como Técnico em Informática em 2019. Uma etapa crucial para aprofundar o entendimento sobre redes, sistemas operacionais e os alicerces do hardware e software.',
        image: CursoGrauTecnico,
    },
    {
        id: 3,
        title: 'Apresentação Técnica',
        context: 'Tascom Academy',
        description: 'Defesa de projeto estruturado em TypeScript para a turma de desenvolvedores. Excelente oportunidade para exercitar soft skills, comunicação assertiva e domínio arquitetural sob avaliação.',
        image: ApresentacaoProjeto,
    },
    {
        id: 4,
        title: 'Entrega do Frontend - Tascom',
        context: 'Sinergia & Equipe',
        description: 'Reunião com o meu grupo da Tascom Academy após a finalização bem-sucedida de toda a trilha de Frontend. Vivência prática de colaboração, code review e cultura ágil.',
        image: GrupoTascom,
    }
];