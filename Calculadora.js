function resultado() {
    const estrato = parseInt(document.getElementById('estrato').value);
    const consumo = parseFloat(document.getElementById('kwh').value);

    if (!consumo || consumo < 1) {
        Swal.fire("Error", "Por favor ingresa un consumo válido en kWh", "warning");
        return;
    }

    // Tarifas oficiales Enel Bogotá - Marzo 2026
    const CS = 130;
    let tarifaBaja = 0, tarifaAlta = 0;

    if (estrato === 1) { tarifaBaja = 397.74; tarifaAlta = 824.59; }
    else if (estrato === 2) { tarifaBaja = 497.18; tarifaAlta = 824.59; }
    else if (estrato === 3) { tarifaBaja = 700.90; tarifaAlta = 824.59; }
    else if (estrato === 4) { tarifaBaja = tarifaAlta = 824.59; }
    else { tarifaBaja = tarifaAlta = 989.50; }

    let costo = (consumo <= CS) 
        ? consumo * tarifaBaja 
        : (CS * tarifaBaja) + ((consumo - CS) * tarifaAlta);

    // Porcentaje hidroeléctrico mundial 2022
    const porcentajeHidro = 15.5;
    const cubierto = (consumo * (porcentajeHidro / 100)).toFixed(0);

    Swal.fire({
        title: `✅ Resultados - Estrato ${estrato}`,
        html: `
            <strong>Consumo:</strong> ${consumo} kWh<br>
            <strong>Factura estimada Enel:</strong> $${costo.toFixed(0)}<br><br>
            <strong>🌊 Cobertura hidroeléctrica:</strong><br>
            Participación mundial: ${porcentajeHidro}%<br>
            <span style="color:#198754; font-size:1.3rem;">
                Se podrían cubrir <strong>${cubierto} kWh</strong> con energía hidro
            </span>
        `,
        icon: "success",
        confirmButtonText: "Cerrar"
    });
}
