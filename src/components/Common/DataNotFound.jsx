import '../../css/DataNotFound.scss';
const DataNotFound = () => {
	return (
		<div className="container-fluid mt-4">
			<div className="jumbotron">
				<div class="toy-train">
					<div class="engine">
						<div class="window">
							<div class="engine-main">
								<div class="smokes">
									<span></span>
								</div>
							</div>
						</div>
						<div class="engine-body">
							<div class="wheels">
								<div class="big-wheel"></div>
								<div class="normal-wheel"></div>
							</div>
						</div>
					</div>
					<div class="locomotive">
						<div class="trash"></div>
						<div class="wheels">
							<div class="normal-wheel"></div>
							<div class="normal-wheel"></div>
						</div>
					</div>
					<div class="tracks">
						<span></span>
						<span></span>
					</div>
				</div>
			</div>
			<div>
				<h1 className="text-center font-weight-bolder text-danger">
					Data Not Found
				</h1>
				<h4 className="text-center font-weight-bolder text-primary">
					Sorry for inconvenience
				</h4>
				<h4 className="text-center font-weight-bolder text-primary">
					Try again later
				</h4>
			</div>
		</div>
	);
};

export default DataNotFound;
