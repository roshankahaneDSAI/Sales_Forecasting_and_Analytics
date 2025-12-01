from ml_service.logging.logger import logging
from ml_service.pipeline.stage_01_data_acquisition import DataAcquisitionTrainingPipeline
from ml_service.pipeline.stage_02_data_preprocessing import DataPreprocessingTrainingPipeline 
from ml_service.pipeline.stage_03_featureEngineering_and_dataTransformation import FeatureEngineeringTrainingPipeline
from ml_service.pipeline.stage_04_modelBuilding_and_training import ModelBuildingAndEvaluationTrainingPipeline

import sys
import io


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



STAGE_NAME = "Data Preprocessing Stage"
try:
        logging.info("*******************************")
        logging.info(f">>>>>>> stage {STAGE_NAME} started <<<<<<")
        obj = DataPreprocessingTrainingPipeline()
        obj.main()
        logging.info(f">>>>>>> stage {STAGE_NAME} completed <<<<<<")
except Exception as e:
        logging.exception(e)
        raise e


STAGE_NAME = "Feature Engineering & Data Transformation"
try:
        logging.info("*******************************")
        logging.info(f">>>>>>> stage {STAGE_NAME} started <<<<<<")
        obj = FeatureEngineeringTrainingPipeline()
        obj.main()
        logging.info(f">>>>>>> stage {STAGE_NAME} completed <<<<<<")
except Exception as e:
        logging.exception(e)
        raise e



STAGE_NAME = "Model Building and Evaluation Stage"
try:
        logging.info("*******************************")
        logging.info(f">>>>>>> stage {STAGE_NAME} started <<<<<<")
        pipeline = ModelBuildingAndEvaluationTrainingPipeline()
        pipeline.main()
        logging.info(f">>>>>>> stage {STAGE_NAME} completed <<<<<<")
except Exception as e:
        logging.exception(e)
        raise e