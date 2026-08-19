from fpdf import FPDF

# Lee el archivo Markdown y genera un PDF simple
INPUT = 'resumen_frontend.md'
OUTPUT = 'resumen_frontend.pdf'

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_font('Arial', size=12)

with open(INPUT, 'r', encoding='utf-8') as f:
    for line in f:
        # Limpiar lineas largas y respetar saltos
        stripped = line.rstrip('\n')
        if stripped == '':
            pdf.ln(5)
            continue
        # FPDF no acepta líneas muy largas; hacemos wrap sencillo
        # dividimos en trozos de 90 caracteres
        while len(stripped) > 90:
            pdf.cell(0, 6, stripped[:90], ln=1)
            stripped = stripped[90:]
        pdf.cell(0, 6, stripped, ln=1)

pdf.output(OUTPUT)
print('PDF generado:', OUTPUT)
