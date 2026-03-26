function calcularBogota() {
    const estrato = parseInt(document.getElementById('estrato').value);
    const consumo = parseFloat(document.getElementById('consumo').value);

    if (!consumo) {
        alert("Por favor ingresa tu consumo mensual en kWh");
        return;
    }

    // === TARIFAS ENEL BOGOTÁ - Marzo 2026 ===
    const CS = 130; // kWh subsidiados
    let tarifaBaja = 0, tarifaAlta = 0;

    if (estrato === 1) { tarifaBaja = 397.74; tarifaAlta = 824.59; }
    else if (estrato === 2) { tarifaBaja = 497.18; tarifaAlta = 824.59; }
    else if (estrato === 3) { tarifaBaja = 700.90; tarifaAlta = 824.59; }
    else if (estrato === 4) { tarifaBaja = tarifaAlta = 824.59; }
    else { tarifaBaja = tarifaAlta = 989.50; } // 5 y 6

    let costo = 0;
    if (consumo <= CS) {
        costo = consumo * tarifaBaja;
    } else {
        costo = (CS * tarifaBaja) + ((consumo - CS) * tarifaAlta);
    }

    // === HIDRO GLOBAL (datos 2022 del dataset Kaggle - sin subir CSV) ===
    const anio = 2022;
    const porcentajeHidro = 15.5; // % real de hidro en la electricidad mundial 2022
    const cubiertoKwh = (consumo * (porcentajeHidro / 100)).toFixed(0);

    // Mostrar resultados
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = `
        <h5 class="text-primary">✅ Resultados para Bogotá (Estrato ${estrato})</h5>
        <p><strong>Consumo:</strong> ${consumo} kWh/mes</p>
        <p><strong>Costo estimado de tu factura Enel:</strong> <span class="fw-bold">$${costo.toFixed(0)}</span></p>
        <hr>
        <h5 class="text-success">🌊 Cobertura con energía hidroeléctrica</h5>
        <p><strong>Participación hidro mundial (2022):</strong> ${porcentajeHidro}%</p>
        <p class="fs-4 fw-bold text-success">De tu consumo podrían cubrirse ≈ <strong>${cubiertoKwh} kWh</strong> con hidro</p>
        <small class="text-muted">* Tarifas oficiales Enel Bogotá + datos globales Kaggle 2022</small>
    `;
    resultadosDiv.style.display = 'block';
}
