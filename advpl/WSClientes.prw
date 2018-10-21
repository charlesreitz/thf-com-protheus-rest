#INCLUDE "TOTVS.CH"
#INCLUDE "RESTFUL.CH"
//User Function WSClientes()
//Return .T.

WSRESTFUL WSClientes DESCRIPTION "Retornar os clientes" //FORMAT "application/json"

//WSDATA count      AS INTEGER
//WSDATA startIndex AS INTEGER

WSMETHOD GET DESCRIPTION "Clientes" //WSSYNTAX "/WSClientes || /WSClientes/{id}"

END WSRESTFUL

WSMETHOD GET WSRECEIVE  WSSERVICE WSClientes
	Local i
	Local oJSon	 	:= JsonObject():New()
	Local nCount	:=	0
	Local nAux		:=	0
	Local aListCli	:=	{}

	// define o tipo de retorno do método
	::SetContentType("application/json")

	nInc	:= 0
	nIncTotal:= 0

	dbSelectArea("SA1")
	dbSetOrder(1)
	dbGoTop()
	Count to nIncTotal
	dbGoTop()

	While !Eof()
		nCount++

		//If nCount >= nStart

			nAux++
			aAdd( aListCli , JsonObject():New() )

			aListCli[nAux]['A1_COD']	:= Alltrim(SA1->A1_COD)
			aListCli[nAux]['A1_LOJA']	:= Alltrim(SA1->A1_LOJA)
			aListCli[nAux]['A1_NOME']	:= Alltrim(SA1->A1_NOME)
			aListCli[nAux]['A1_NREDUZ']	:= Alltrim(SA1->A1_NREDUZ)
			aListCli[nAux]['A1_CGC']	:= Alltrim(SA1->A1_CGC)

			//If Len(aListCli) >= self:pageSize
			//	Exit
			//EndIf

		//EndIf

		SA1->(dbSkip())
	EndDo
	//sleep(1000)
	oJSon['clientes'] := aListCli

	cReturn	:= FWJsonSerialize(oJSon)
	conout(cReturn)
	::SetResponse(cReturn)
	FreeObj(oJSon)

Return .T.
