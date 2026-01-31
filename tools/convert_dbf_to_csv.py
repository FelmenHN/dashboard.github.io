#!/usr/bin/env python3
"""
convert_dbf_to_csv.py

Convierte un DBF (por ejemplo una tabla de atributos) a CSV separado por ';' (UTF-8 con BOM).
Requisitos:
  pip install geopandas

Uso:
  python tools/convert_dbf_to_csv.py "ruta/al/archivo.dbf" "salida.csv"
"""

import sys
from pathlib import Path
import csv

def main():
  if len(sys.argv) < 3:
    print("Uso: python tools/convert_dbf_to_csv.py <entrada.dbf> <salida.csv>")
    sys.exit(1)

  in_path = Path(sys.argv[1]).expanduser().resolve()
  out_path = Path(sys.argv[2]).expanduser().resolve()

  if not in_path.exists():
    print(f"ERROR: No existe: {in_path}")
    sys.exit(2)

  import geopandas as gpd
  gdf = gpd.read_file(str(in_path))
  df = gdf.drop(columns=["geometry"], errors="ignore")

  out_path.parent.mkdir(parents=True, exist_ok=True)
  df.to_csv(out_path, index=False, sep=";", encoding="utf-8-sig", quoting=csv.QUOTE_MINIMAL)

  print(f"OK: CSV generado en: {out_path} (filas: {len(df)})")

if __name__ == "__main__":
  main()
