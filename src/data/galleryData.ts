import ApresentacaoProjeto from '@/assets/gallery/apresentacao.jpeg';
import CursoGrauTecnico from '@/assets/gallery/grautecnico.jpeg';
import GrupoTascom from '@/assets/gallery/tascom.jpeg';
import ProgramadoresSistIfpe from '@/assets/gallery/ifpe.jpeg';

export interface GalleryEvent {
    id: number;
    title: string;
    context: string;
    description: string;
    image: string;
}

export const galleryData: GalleryEvent[] = [
    {
        id: 1,
        title: 'Desenvolvedor de Sistemas(IFPE - Porto Digital)',
        context: 'Ecossistema Porto Digital',
        description: 'Conclusão do curso de Programadores de Sistema em 2017. O marco zero da minha jornada, fundamentando a lógica de programação com o valioso apoio do polo tecnológico de Recife.',
        image: ProgramadoresSistIfpe,
    },
    {
        id: 2,
        title: 'Imersão em Infraestrutura',
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