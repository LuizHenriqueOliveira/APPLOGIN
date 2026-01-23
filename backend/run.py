import os
import sys
import subprocess

def main():
    # Pega o caminho do executável Python que está rodando este script agora
    # Se o venv estiver ativo, sys.executable será o python do venv
    python_exe = sys.executable
    
    try:
        print(f"Iniciando servidor na porta 3000...")
        print(f"Usando Python de: {python_exe}")
        
        # Chama o manage.py usando o MESMO python que rodou este script
        subprocess.run([python_exe, "manage.py", "runserver", "3000"])
    except KeyboardInterrupt:
        print("\nServidor finalizado.")
    except Exception as e:
        print(f"Erro ao iniciar o servidor: {e}")

if __name__ == "__main__":
    main()
