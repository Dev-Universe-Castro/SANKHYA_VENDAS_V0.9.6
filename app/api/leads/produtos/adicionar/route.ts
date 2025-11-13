import { NextResponse } from 'next/server';
import { adicionarProdutoLead } from '@/lib/oracle-leads-service';

export async function POST(request: Request) {
  try {
    const produtoData = await request.json();

    const idEmpresa = 1; // ID_EMPRESA fixo

    console.log('➕ Adicionando produto ao lead:', produtoData);

    const novoProduto = await adicionarProdutoLead(produtoData, idEmpresa);

    return NextResponse.json(novoProduto);
  } catch (error: any) {
    console.error('❌ Erro ao adicionar produto:', error);
    return NextResponse.json(
      { error: error.message || 'Erro ao adicionar produto' },
      { status: 500 }
    );
  }
}