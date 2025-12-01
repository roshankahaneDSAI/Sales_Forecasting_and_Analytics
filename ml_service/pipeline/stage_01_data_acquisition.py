from ml_service.config.configuration import ConfigurationManager
from ml_service.components.data_ingestion import DataLoader
from ml_service.logging.logger import logging
from ml_service.constants import *



class DataAcquisitionTrainingPipeline:
    """Pipeline for downloading and extracting raw data files."""
    def __init__(self):
        pass

    def main(self):
        config = ConfigurationManager(CONFIG_FILE_PATH, PARAMS_FILE_PATH)
        data_acquisition_config = config.get_data_acquisition_config()

        loader = DataLoader(
            data_dir=data_acquisition_config.local_dir,
            source=data_acquisition_config.source,
            data_files=data_acquisition_config.data_files,
            dataset_name=data_acquisition_config.dataset_name
        )

        loader.download()

if __name__ == "__main__":
    STAGE_NAME = "Data Acquisition Stage"
    try:
        logging.info("*******************************")
        logging.info(f">>>>>>> stage {STAGE_NAME} started <<<<<<")
        obj = DataAcquisitionTrainingPipeline()
        obj.main()
        logging.info(f">>>>>>> stage {STAGE_NAME} completed <<<<<<")
    except Exception as e:
        logging.exception(e)
        raise e
